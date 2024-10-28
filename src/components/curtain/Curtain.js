

function Curtain({sections, setActive, active}) {
  return (
    <div className="flex h-full justify-start">
      {sections.map(data => (
        <CurtainItem 
          key={data.label} 
          data={data} 
          setActive={setActive} 
          isActive={active === data.label}/>
      ))}
    </div>
  );
}

function CurtainItem({data, setActive, isActive}) {
  return (
    <div title={isActive ? data.label : undefined} className={isActive ? 
      "flex flex-row p-2 border-x-2 cursor-pointer overflow-hidden grow" : 
      "flex flex-col items-center p-2 border-x-2 cursor-pointer hover:bg-gray-100"} 
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
  );
}

export default Curtain;
