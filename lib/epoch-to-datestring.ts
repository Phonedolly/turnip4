export const epochToDateString = (epoch: EpochTimeStamp) => {
  return new Date(epoch).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
