import "./Container.css";

export default function Container({children}) {
  return (
    <div className="content">
      {children}
    </div>
  );
}

// {...props} - spread

// props - children