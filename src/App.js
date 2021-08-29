import "./App.css"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import React, { useEffect } from "react";
import Posts from "./Component/Posts";
import Header from "./Component/Header";
import { db } from './firebase';


function getModalStyle() {
    const top = 50
    const left = 50
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const App = () => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [posts, setposts] = React.useState([])
    const [open, setOpen] = React.useState(false);
    const [username, setusername] = React.useState("");
    const [email, setemail] = React.useState("");
    const [pass, setpass] = React.useState("");


    // I'ts triggered when apps load 
    useEffect(() => {
        //its fired when any new new post will be added in a collection called "Instagram_clone"
        db.collection("Instagram_clone").onSnapshot(snapshot => {
            setposts(snapshot.docs.map(doc => ({
                post: doc.data(),
                id: doc.id
            })));
     }
        )
    }, []) 

    return (
        <>

            <div className="Header_div">
                <Header btnClick={() => setOpen(true)} />
                {posts.map(({ id, post }) => (
                    <Posts key={id} avtar={post.avtar} username={post.username} caption={post.caption} image={post.image} />
                ))}

            </div>

            <Modal
                open={open}
                onClose={() => setOpen(false)}

            >
                <div style={modalStyle} className={classes.paper} >
                    <form>
                        <input value={username} onChange={(e)=>setusername(e.target.value)} type="text" placeholder="Enter Username" ></input>
                        <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Enter Email" ></input>
                        <input value={pass} onChange={(e)=>setpass(e.target.value)} type="password" placeholder="Enter Password" ></input>
                        <button type="submit">Submit</button>
                    </form>

                </div> 
            </Modal>

        </>
    )

}

export default App;