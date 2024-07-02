export default function HomePage() {

    return (
        <>
            <div className="container">
                <div className="middle">
                    <div className="herosection">
                        <h1><img src="src/assets/main_emoji.png" alt="icon" width="300" /></h1>
                        <p><strong>안녕하세요. 컴퓨터공학과 22학번 박태경입니다.</strong></p> 
                    </div>
                    <div className="snsbar">
                        <ul>
                            <li><a href="https://www.instagram.com/tgyeongt" target="_blank"><img src="src/assets/insta.svg" alt="insta" width="40" /></a></li>
                            <li><a href="https://github.com/tgyeongt" target="_blank"><img src="src/assets/github.svg" alt="github" width="40" /></a></li>
                            <li><a href="https://blog.naver.com/bluewaveinyoursky" target="_blank"><img src="src/assets/blog.svg" alt="blog" width="40" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}