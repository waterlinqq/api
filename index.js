const getBuildindingById = (buildingId) => {
    // feature
    const apiurl = `htpps://vrmaker-backend/api/v3/building/${buildingId}`
    return axios.get(apiurl)
}