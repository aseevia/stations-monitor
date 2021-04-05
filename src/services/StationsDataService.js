class StationsDataService {
    defaultUrl = "stations.json"
    get(url){
        return this.delay(2000)
                .then(() => fetch(url || this.defaultUrl))
                .then(res=>{
                    if (res.ok) return res.json();
                    else throw new Error("Failed to load stations list");
                })
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}

export default StationsDataService;