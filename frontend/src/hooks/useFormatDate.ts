const useFormatDate = (date: Date) => {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
  }).format(new Date(date))
}

export default useFormatDate
