import styled from "styled-components";

export const TodayElement = () =>{
    const today = new Date();
    const yearOption: Intl.DateTimeFormatOptions = {
        year:'numeric',
    };
    const monthOption: Intl.DateTimeFormatOptions = {
        month: 'long',
    };
    const monthDay: Intl.DateTimeFormatOptions = {
        day: 'numeric',
    };
    const weekDay: Intl.DateTimeFormatOptions = {
        weekday: 'long'
    };

    const lang ={
        en : 'en-US',
        kr : 'ko-KR'
    }

    const formattedDate = {
        year:today.toLocaleDateString(lang.en, yearOption),
        month:today.toLocaleDateString(lang.kr, monthOption),
        day:today.toLocaleDateString(lang.en, monthDay),
        weekday:today.toLocaleDateString(lang.kr, weekDay),
    }


    return <Today>
        <div className={"current-ymd"}>
            <span className={"current-day"}>{formattedDate.day}</span>
            <div className={"box"}>
                <span>{formattedDate.month}</span>
                <span>{formattedDate.year}</span>
            </div>
        </div>
        <span className={"current-weekday"}>{formattedDate.weekday}</span>
    </Today>
}

const Today = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-inline:3rem;
    margin-block:3rem;
    font-size:2rem;
    .current-ymd{
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
    }
    .current-day{
        color:var(--black);
        font-size:6rem;
        font-weight: bold;
        line-height:0.8;
    }
    .box{
        margin-left:1rem;
        span{
            display: block;
            color:var(--black);
        }
    }
    .current-weekday{
        color:var(--black);
    }
`