import Post from './generics/Post';

export default function Posts() {
    const posts = [
        {
            userImage: "assets/img/meowed.svg",
            userName: "meowed",
            postImage: "assets/img/gato-telefone.svg",
            likeImage: "assets/img/respondeai.svg",
            likeUser: "respondeai",
            likes: "101.523"
        }, 
        {
            userImage: "assets/img/barked.svg",
            userName: "barked",
            postImage: "assets/img/dog.svg",
            likeImage: "assets/img/adorable_animals.svg",
            likeUser: "adorable_animals",
            likes: "99.159"
        }
    ]
    return (
        <div class="posts">
            {posts.map(post => <Post userImage={post.userImage} userName={post.userName} postImage={post.postImage} likeImage={post.likeImage} likeUser={post.likeUser} likes={post.likes} />)}
        </div>
    );
}