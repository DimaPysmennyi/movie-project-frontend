import './PopularReviews.css'

export function PopularReviews(){
    const reviews = [
        {
            id: 0, 
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis ultricies tellus. In bibendum bibendum leo ut iaculis. Donec elit metus, tincidunt vel massa sit amet, viverra feugiat est. Aenean varius dui at mi ultrices, ut tempor arcu semper. Proin et magna dolor. Praesent semper libero felis, vel mollis felis placerat nec.',
            src: 'https://pbs.twimg.com/media/GKHTkn7aUAAv_qu.jpg:large'
        },
        {
            id: 1, 
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis ultricies tellus. In bibendum bibendum leo ut iaculis. Donec elit metus, tincidunt vel massa sit amet, viverra feugiat est. Aenean varius dui at mi ultrices, ut tempor arcu semper. Proin et magna dolor. Praesent semper libero felis, vel mollis felis placerat nec.',
            src: 'https://m.media-amazon.com/images/I/91ezOOQjE3L._AC_UF894,1000_QL80_.jpg'
        },
        {
            id: 2, 
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis ultricies tellus. In bibendum bibendum leo ut iaculis. Donec elit metus, tincidunt vel massa sit amet, viverra feugiat est. Aenean varius dui at mi ultrices, ut tempor arcu semper. Proin et magna dolor. Praesent semper libero felis, vel mollis felis placerat nec.',
            src: 'https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
        },
    ]
    return (
        <div className='popularReviews'>
            <h2>Популярні відгуки</h2>
            <hr color='gray'/>
            <div className='reviews'>
                {reviews.map((review) => {
                    return (
                        <div className='popularReview'>
                            <img src={review.src} className='reviewImg' />
                            <p className='reviewText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus soluta, voluptatibus voluptatem placeat provident nemo ducimus doloribus nobis cumque mollitia rem quidem at voluptate officiis repellat sequi ipsum enim!
                            Iusto ullam tenetur dolorem nam adipisci dolores inventore ab. Vitae rem quis sed laborum, sint suscipit, reiciendis iste ab praesentium sunt saepe corrupti blanditiis, animi nisi odio. Illum, quasi eos.
                            Quos, dolorum accusantium, vero ut accusamus velit amet ratione explicabo, ea illo dolore veniam adipisci ipsam ex. Officiis sequi beatae, ullam eius amet, pariatur facilis blanditiis est quas, eos possimus!
                            Et odit quos facilis tenetur nulla adipisci sequi maxime porro nesciunt, eos optio quo exercitationem quaerat aut itaque, distinctio corrupti eum esse assumenda a voluptatem non ad? Aliquid, aliquam ratione.</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}