import Navbar from "@/components/navbar/navbar";

const AllProblems = () => {
    return ( <>
        
        <main className="flex w-screen h-screen flex-col items-center justify-center pt-24">
        <Navbar />
            <div className="container max-w-7xl h-screen">
                {/* <Cards />
                <StudyPlan />
                <Problems /> */}
                <div className="flex justify-between space-x-4 relative">
                    <div className="max-w-[1000px]">box 1</div>
                    <div className="max-w-[500px]">box 2</div>
                </div>
            </div>        
      </main></>
    );
}

export default AllProblems;