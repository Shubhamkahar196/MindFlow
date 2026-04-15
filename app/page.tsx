
import Navbar from "@/components/Navbar";
import TaskList from "@/components/TaskList";
import Timer from "@/components/Timer";


export default function Home() {
  
  return (
    <div className="bg-custom-gradient min-h-screen">

     <Navbar/>
     <Timer/>
          
<TaskList/>
          

          
   
    </div>
  );
}
