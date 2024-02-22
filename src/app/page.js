"use client"
import Image from 'next/image'
import ToDoList from '../../components/ToDoList'
import Yupptv from '../../components/Yupptv'
import styles from './page.module.css'


export default function Home() {
  return (
    <div>
      <ToDoList></ToDoList>
      <h1>Sun Direct Portal</h1>
      {/* <iframe width={"1400px"} height={"900px"} src='https://dashboard-test.videograph.ai/player_analytics?token=ewogICJvcmdfdXVpZCI6ICIxYzRkODE1ZS00OTg4LTRkNTktOTYxNC04YWE0YjZiOTQyZDEiLAogICJhdXRoX3Rva2VuIjogIkJhc2ljIFpESXhNR1V3TnpBdE5qSmhaaTAwTnpZNUxXRTJNVFl0WWpCak1qZGhNVFEzTkRjMk9taG5kRzAyYUdGb2JHTmhkWFkyY1hadGJBPT0iCn0='></iframe> */}
      {/* <Yupptv></Yupptv> */}
    </div>
    
  )
}
