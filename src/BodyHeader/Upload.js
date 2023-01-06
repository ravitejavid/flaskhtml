import { useEffect,useRef } from "react";

const UploadWidget = () => {
   const cloudinaryRef = useRef();
   const widgetRef = useRef();
   useEffect(() =>{
     cloudinaryRef.current = Window.cloudinary;
     widgetRef.current = cloudinaryRef.current.createUploadWidget(
        {
            cloudName:'dzrhossqw',
            uploadpreset:'nw621qaw',
        },function(error,result){
            console.log(result)
        }
     )
   },[])
   return(
    <button onClick={() => widgetRef.current.open()}>
        upload
        </button>
   )
}
export default UploadWidget;