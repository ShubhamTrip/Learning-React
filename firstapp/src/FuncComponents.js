export default function FunctionsComp(props){
    return (
      <div>

        <h1>{props.txt}. This is an Example of Function Component with Props</h1>
        <p>I am {props.obj.name}. I am a {props.obj.roll}</p>
      </div>
    );
}