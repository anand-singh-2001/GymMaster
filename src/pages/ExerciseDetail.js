import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import SimilarExercises from "../components/SimilarExercises";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos]=useState([])
  const [targetMuscle, setTargetMuscle]= useState([])
  const [equipment, setEquipment]= useState([])
  const { id } = useParams(); //gives access to the current id

  useEffect(() => {
    const fetchExercisesData = async () => {

      const exerciseDbUrl =`https://exercisedb.p.rapidapi.com`;

      const youtubeSearchUrl=`https://youtube-search-and-download.p.rapidapi.com`

      const exerciseDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

      const exerciseVideoData= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)

      const targetMuscleExercisesData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)

      const targetEquipmentExercisesData= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)


      setExerciseDetail(exerciseDetailData)
      setExerciseVideos(exerciseVideoData.contents)
      setTargetMuscle(targetMuscleExercisesData)
      setEquipment(targetEquipmentExercisesData)
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscle={targetMuscle} equipment={equipment}  />
    </Box>
  );
};

export default ExerciseDetail;
