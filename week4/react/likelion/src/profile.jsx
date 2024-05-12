function Profile(Props) {
    return (
        <>
        <p>이름: {Props.name}</p>
        <p>소개: {Props.introduction}</p>
        <p>조회수: {Props.viewCount}</p>
        </>
    );
}
export default Profile