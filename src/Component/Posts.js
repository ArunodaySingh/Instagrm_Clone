import Avatar from '@material-ui/core/Avatar';
import "./Posts.css"

const Posts = (props) => {
    return (

        <>
            <div className="post">
                <div className="Avtar">
                    <Avatar
                        className="post_avtar"
                        alt="Insta_avtar"
                        src={props.avtar}
                    />
                    <h3 className="user_name">{props.username}</h3>
                </div>
                <img className="Image_post" src={props.image} alt="insta_post" >
                </img>
                <h4 className="post_text">
                    <strong>
                        {props.username + ": "}
                    </strong>
                    {props.caption}
                </h4>

            </div>

        </>


    )
}

export default Posts;