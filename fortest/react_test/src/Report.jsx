import Profile from "./Profile";

function Report(Props) {

  return (
    <>
    <Profile
        name = "박태경"
        introduction = "안녕하세요 박태경입니다."
        viewCount = {1500}
    />
    <Profile
        name = "김민서"
        introduction = "안녕하세요 김민서입니다."
        viewCount = {2500}
    />
    <Profile
        name = "조연제"
        introduction = "안녕하세요 조연제입니다."
        viewCount = {3000}
    />
    </>
  )
}

export default Report
