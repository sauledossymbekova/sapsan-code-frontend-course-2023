export function Item() {
  return (
    <div>
      <h3>Create user interfaces from components</h3>
      <p>
        React lets you build user interfaces out of individual pieces called
        components. Create your own React components like Thumbnail, LikeButton,
        and Video. Then combine them into entire screens, pages, and apps.
      </p>
    </div>
  );
}


export default function List(){
  return(
    <div>
      <Item/>
      <Item/>
      <Item/>
    </div>
  )
}