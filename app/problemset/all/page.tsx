import Navbar from "@/components/navbar/navbar";
import Cards from '@/components/cards/cards';

const AllProblems = () => {
    return (
        <main className="flex w-screen h-screen flex-col items-center justify-center pt-24">
            <Navbar />
            <div className="container max-w-6xl h-screen p-6">
                
                {/* 
                <StudyPlan />
                <Problems />
                */}
                <div className="flex justify-between space-x-4">
                    <div className="min-w-2xl">
                        <Cards />
                        
                    </div>
                    <div className="max-w-[500px]">box 2</div>
                </div>
            </div>        
      </main>
    );
}

export default AllProblems;