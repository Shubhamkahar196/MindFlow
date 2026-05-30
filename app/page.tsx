
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Time from "@/components/Time";


// import TaskList from "@/components/TaskList";
// import Timer from "@/components/Timer";


export default function Home() {
  
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100  px-4 sm:px-6 lg:px-8 selection:bg-indigo-500/30">

     <Navbar/>
     <Time/>
     {/* <Timer/>
          
<TaskList/> */}
        <Footer/>  

          
   
    </div>
  );
}
