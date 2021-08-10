function upload(){
    //get your image
    var image=document.getElementById('image').files[0];
    //get your blog TITLE
    var title=document.getElementById('title').value;
    //get your blog author
    var name=document.getElementById('name').value;
    //get your blog content
    var content=document.getElementById('content').value;
    //get image name
    var imageName=image.name;
    //firebase storage reference
    //it is the path where your image will be stored
    var storageRef=firebase.storage().ref('images/'+imageName);
    //upload image to selected storage reference
    //make sure you pass image here
    var uploadTask=storageRef.put(image);
    //to get the state of image uploading....
    uploadTask.on('state_changed',function(snapshot){
         //get task progress by following code
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
      //handle error here
      console.log(error.message);
    },function(){
        //handle successfull upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           //get your image download url here and upload it to databse
           //our path where data is stored ...push is used so that every post have unique id
           firebase.database().ref('roboworld/').push().set({
                 title:title,
		 author:name,
         content:content,
         view:0,
                 imageURL:downloadURL
           },function(error){
               if(error){
                   alert("Error while uploading");
               }else{
                   alert("Successfully uploaded");
                   //now reset your form
                   document.getElementById('formcontainer').reset();
                   
               }
           });
        });
    });
    console.log("a");
}