import './mainPage.css'
function Contents() {
    const videos = [
        {
            id: 1, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', title: 'Bulbuli | Coke Studio Bangla | Season One | RItu Raj X Nandita',
            description: 'Coke Studio Bangla', views: "1.5M views 2 days ago", channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true'

        }, {
            id: 2, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true', title: 'Infinix Note 12:       AMOLED    Helio G88 SoC!',
            description: 'ATC Android ToTo Company', views: "42M views 2 days ago", channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true'

        }, {
            id: 3, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true', title: 'My first UX Design case study - This got me my first job.',
            description: 'Saptarshi Prakash', views: "48K views 1 years ago", channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true'

        }, {
            id: 4, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true', title: "My Mix", views: "Lopamudra Mitra, Anupam Roy, and More"
        },
        {
            id: 5, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true', title: 'UX Design-What is it?(From AJ &Smart)',
            description: 'AJ&Smar', views: "150k views 3 years ago", channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true'

        },
        {
          id: 6, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true', title: "Mix-Mombati | Mohan Shaif| Dhakaiya Dose | Mahib Ahsan ft Anika", views: "Lopamudra Mitra, Anupam Roy, and More"
      }, {
            id: 7, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true', title: '      |48 VISA-FREE',
            description: 'Nardin On The Go', views: "1.7M views 1 year ago", channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true'

        }, {
            id: 8, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true', title: 'My first UX Design case study - This got me my first job.',
            description: 'Saptarshi Prakash', views: "48K views 1 years ago", channel:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true '

        }, {
            id: 9, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true', title: "My Mix", views: "Lopamudra Mitra, Anupam Roy, and More"
        },
        {
            id: 10, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true', title: 'Bulbuli | Coke Studio Bangla | Season One | RItu RajX Nandita',
            description: 'Coke Studio Bangla', views: "1.5M views 2 days ago", channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true'

        }, {
            id: 11, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true', title: 'Infinix Note 12: <br> AMOLED    Helio G88 SoC!',
            description: 'ATC Android ToTo Company', views: "42M views 2 days ago", channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true'

        }, {
            id: 12, img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true', title: 'My first UX Design case study - This got me my first job.',
            description: 'Saptarshi Prakash', views: "48K views 1 years ago", channel: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true'

        }


    ]
    return (
        <>
            <div className="feed">
                {videos.map((feed) => (
                    <div key={feed.id} className="vid">

                        <img src={feed.img_url} alt={feed.title} />
                        <div className='Channel'>
                            <div><img src={feed.channel} />
                            </div>
                            <div>

                                <p className="title">{feed.title}</p>
                                <p className="info">{feed.description}</p>
                                <p className="info">{feed.views}</p>
                            </div></div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Contents

