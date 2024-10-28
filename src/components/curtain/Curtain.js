

function Curtain({sections, setActive, active}) {
  return (
    <div className="flex h-full justify-start">
      {sections.map(function(data) {

        const isActive = active === data.label;

        return (
          <div key={data.label} title={isActive ? data.label : undefined} className={isActive ? 
            "flex flex-row p-2 border-2 cursor-pointer overflow-hidden grow" : 
            "flex flex-col items-center p-2 border-2 cursor-pointer"} 
            onClick={() => setActive(data.label)}>
            {isActive ? 
              <div className="w-20 h-12 p-2 content-center">
                {data.icon}
              </div> : 
              <div className="w-12 h-12 p-2 content-center">
                {data.icon}
              </div>
            }
            {isActive ? 
              <h2 className="text-4xl font-bold h-20 content-center truncate pr-2">
                {data.label}
              </h2>
              : 
              <h2 className="text-2xl font-bold h-20"
                style={{
                writingMode: "vertical-rl", 
                textOrientation: "mixed"}}>
                {data.label}
              </h2>
            }
            
          </div>
        )
    })}
    </div>
  );
}

export default Curtain;
