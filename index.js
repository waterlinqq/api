const getBuildindingById = (buildingId) => {
    const apiurl = `htpps://vrmaker-backend/api/v1/building/${buildingId}`
    return axios.get(apiurl)
}