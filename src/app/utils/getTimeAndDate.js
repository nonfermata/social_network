const getTimeAndDate = (formattedTime) => {
    const timeArray = formattedTime.split(" ");
    const timeString =
        timeArray[3].split(":")[0] + ":" + timeArray[3].split(":")[1];
    timeArray.pop();
    const dateString = timeArray.join(" ");
    return { time: timeString, date: dateString };
};

export default getTimeAndDate;
