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
        month:today.toLocaleDateString(lang.en, monthOption),
        day:today.toLocaleDateString(lang.en, monthDay),
        weekday:today.toLocaleDateString(lang.en, weekDay),
    }


    return <Today>
        {formattedDate.year}
        {formattedDate.month}
        {formattedDate.day}
        {formattedDate.weekday}
    </Today>
}

const Today = styled.div`
    color:#1d1d1d;
    font-size:2rem;
`