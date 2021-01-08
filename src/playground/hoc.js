import React from 'react';
import ReactDOM from 'react-dom';

const Info= (props)=>(
    <div>
        <h1>Info</h1>
        <p>the info is: {props.info}</p>
    </div>
);


const WithAdminWarning = (WrappedComponenet)=>{
    return(props)=>(
    <div>
      {props.isAdmin && <p>this is private info. Please Dont Share</p> || <p>this is your authenetications</p> }  
        <WrappedComponenet {...props}/>
    </div>
    );
};

const AdminInfo = WithAdminWarning(Info);



ReactDOM.render(<AdminInfo isAdmin={true} info='you are milan' />, document.getElementById('app'));