import styled from '@emotion/styled'

const Background = styled.div`
    width: 640px;
    height: 1138px;
    display: flex;
    flex-direction: column;
    /* border: solid 1px;
    border-color: #cacaca; */
`
const TopBar = styled.div`
    width: 640px;
    height: 43px;
    margin: 0 0 36px 0;
    padding: 6px 15px 7px 445px;
    background-color: rgba(0, 0, 0, 0.1);
`
const TopPack = styled.div`
    width: 179px;
    height: 30px;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Wifi = styled.div`
    width: 28px;
    height: 21px;
    background-color: rgba(79, 79, 79, 0.3);
`
const Data = styled.div`
    width: 20px;
    height: 21px;
    background-color: rgba(79, 79, 79, 0.3);
`
const Battery = styled.div`
    width: 14px;
    height: 21px;
    background-color: rgba(79, 79, 79, 0.3);
`
const Time = styled.div`
    width: 58px;
    height: 30px;
    opacity: 0.9;
    font-family: Roboto;
    font-size: 23px;
    padding: 3.5px 0;
    color: #000;
`
const MyPage1 = styled.div`
    width: 542px;
    /* height: 303px; */
    margin: 0 0 0 50px;
    padding: 0px;
    display: flex;
    flex-direction: column;
`
const Zoom = styled.div`
    width: 542px;
    height: 32px;
    margin: 0 0 31px 0;
    padding: 0px;
    display: flex;
    justify-content: flex-end;
    object-fit: contain;
`
const Profile = styled.div`
    width: 542px;
    height: 60px;
    margin: 0 0 52px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const My = styled.span`
    width: 71px;
    height: 43px;
    margin: 9px 0px 8px;
    font-family: SpoqaHanSans;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.07;
    letter-spacing: -1.33px;
    color: #1f1f1f;
`
const Picture = styled.div`
    width: 176px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Face = styled.img`
    box-sizing: border-box;
    width: 60px;
    height: 60px;
`
const PictureRight = styled.div`
    width: 96px;
    height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Name = styled.span`
    width: 64px;
    height: 26px;
    margin: 0;
    font-family: SpoqaHanSans;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.8px;
    color: #1f1f1f;
`
const RightArrow = styled.div`
    width: 28px;
    height: 28px;
`

const Category = styled.div`
    width: 542px;
    height: 42px;
    margin: 0 0 50px 0;
    display: flex;
    justify-content: flex-start;
`
const CategoryUnder = styled.div`
    /* box-sizing: border-box; */
    height: 42px;
    margin: 0px 50px 0px 0px;
    padding: 0 0 12px 0;
    font-family: SpoqaHanSans;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: normal;
    color: #cacaca;
`

const CategoryUnder2 = styled.div`
    height: 42px;
    margin: 0px 50px 0px 0px;
    padding: 0 0 12px 0;
    font-family: SpoqaHanSans;
    font-size: 30px;
    font-weight: bold;
    color: #ff1b6d;
    border-bottom: solid 2px;
    border-color: #ff1b6d;
`
const Line1 = styled.div`
    width: 640px;
    height: 1px;
    margin: 0 0 29px 0;
    border: solid 1px #cacaca;
`
const QuestionBox = styled.div`
    width: 550px;
    /* height: 610px; */
    margin: 0 0 0 50px;
    display: flex;
    flex-direction: column;
`
const Question = styled.div`
    width: 550px;
    height: 60px;
    margin: 0 0 50px 0;
    display: flex;
    justify-content: space-between;

`
const QuestionLeft = styled.div`
    width: 490px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


`
const Quest = styled.div`
    width: 490px;
    height: 20px;
    margin: 1px 0 1px 0;
    font-family: SpoqaHanSans;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    color: #adadad;
`
const QuestTitle = styled.div`
    width: 490px;
    height: 26px;
    margin: 1px 0 1px 0;
    font-family: SpoqaHanSans;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: normal;
    color: #444;
`
const QuestionRight = styled.div`
    width: 60px;
    height: 60px;
    padding: 0px;
`
const Menu = styled.div`
    width: 496px;
    height: 96px;
    margin: 5px 0 0 50px;
    display: flex;
    justify-content: space-between;
`
const MenuUnder = styled.div`
    width: 90px;
    height: 81px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MenuUnderIcon = styled.div`
   width: 58px;
   height: 58px;
   margin: 0 0 3px 0;
`
const MenuUnderText = styled.span`
    width: 90px;
    height: 20px;
    padding: 2px 0 0 0;
    font-family: SpoqaHanSans;
    font-size: 16px;
    text-align: center;
    color: #adadad;
`
const MenuUnderText2 = styled.span`
    width: 90px;
    height: 20px;
    padding: 2px 0 0 0;
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #ff1b6d;
`

const Line2 = styled.div`
    width: 640px;
    height: 1px;
    margin: 5px 0 0 0;
    border: solid 1px #cacaca;
`



export default function MyPage(){

    return(
        <Background>
            <TopBar>
                <TopPack>
                    <Wifi></Wifi>
                    <Data></Data>
                    <Battery></Battery>
                    <Time>12:30</Time>
                </TopPack>
            </TopBar>
            <MyPage1>
                <Zoom>
                    <img src="..//images/ic-58-main-search-black.svg" />
                </Zoom>
                <Profile>
                    <My>마이</My>
                    <Picture>
                        <Face src="..//images/img-60-profile-image.png" />
                        <PictureRight>
                            <Name>
                                임정아
                            </Name>
                            <RightArrow>
                                <img src="..//images/ic-28-arrow.svg" />
                            </RightArrow>
                        </PictureRight>
                    </Picture>
                </Profile>
                <Category>
                    <CategoryUnder>공지사항</CategoryUnder>
                    <CategoryUnder>이벤트</CategoryUnder>
                    <CategoryUnder2>FAQ</CategoryUnder2>
                    <CategoryUnder>Q&A</CategoryUnder>
                </Category>


            </MyPage1>
            <Line1></Line1>
            
            <QuestionBox>
                <Question>
                    <QuestionLeft>
                        <Quest>Q. 01</Quest>
                        <QuestTitle>리뷰 작성은 어떻게 하나요?</QuestTitle>
                    </QuestionLeft>
                    <QuestionRight>
                        <img src="..//images/ic-70-arrow-right.svg" />
                    </QuestionRight>
                </Question>

                <Question>
                    <QuestionLeft>
                        <Quest>Q. 02</Quest>
                        <QuestTitle>리뷰 수정/삭제는 어떻게 하나요?</QuestTitle>
                    </QuestionLeft>
                    <QuestionRight>
                        <img src="..//images/ic-70-arrow-right.svg" />
                    </QuestionRight>
                </Question>

                <Question>
                    <QuestionLeft>
                        <Quest>Q. 03</Quest>
                        <QuestTitle>아이디/비밀번호를 잊어버렸어요.</QuestTitle>
                    </QuestionLeft>
                    <QuestionRight>
                        <img src="..//images/ic-70-arrow-right.svg" />
                    </QuestionRight>
                </Question>

                <Question>
                    <QuestionLeft>
                        <Quest>Q. 04</Quest>
                        <QuestTitle>회원탈퇴를 하고싶어요.</QuestTitle>
                    </QuestionLeft>
                    <QuestionRight>
                        <img src="..//images/ic-70-arrow-right.svg" />
                    </QuestionRight>
                </Question>

                <Question>
                    <QuestionLeft>
                        <Quest>Q. 05</Quest>
                        <QuestTitle>출발지 설정은 어떻게 하나요?</QuestTitle>
                    </QuestionLeft>
                    <QuestionRight>
                    <img src="..//images/ic-70-arrow-right.svg" />
                    </QuestionRight>
                </Question>

                <Question>
                    <QuestionLeft>
                        <Quest>Q. 06</Quest>
                        <QuestTitle>비밀번호를 변경하고 싶어요.</QuestTitle>
                    </QuestionLeft>
                    <QuestionRight>
                    <img src="..//images/ic-70-arrow-right.svg" />
                    </QuestionRight>
                </Question>

            </QuestionBox>

            <Line2></Line2>

            <Menu>
                <MenuUnder>
                    <MenuUnderIcon>
                        <img src="..//images/ic-58-main-home-unselected.svg" />
                    </MenuUnderIcon>                    
                    <MenuUnderText>홈</MenuUnderText>
                </MenuUnder>
                <MenuUnder>
                    <MenuUnderIcon>
                        <img src="..//images/ic-58-main-location-unselected.svg" />
                    </MenuUnderIcon>
                    <MenuUnderText>잇츠로드</MenuUnderText>
                </MenuUnder>
                <MenuUnder>
                    <MenuUnderIcon>
                        <img src="..//images/ic-58-main-like-unselected.svg" />
                    </MenuUnderIcon>
                    <MenuUnderText>마이찜</MenuUnderText>
                </MenuUnder>
                <MenuUnder>
                    <MenuUnderIcon>
                        <img src="..//images/ic-58-main-my-selected.svg" />
                    </MenuUnderIcon>
                    <MenuUnderText2>마이</MenuUnderText2>
                </MenuUnder>
            </Menu>
        </Background>
    )

}