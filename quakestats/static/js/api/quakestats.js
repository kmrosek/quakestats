class QuakeStatsApi {
  constructor() {
    this.endpoint = '/api/v2'
  }

  get(path) {
    var req = new Request(`${this.endpoint}/${path}`)
    return fetch(req).then(function(response) {
      return response.json().then(function(json) {
        return json
      })
    })
  }

  getMatches() {
    return this.get('match')
  }

  getMatch(matchId) {
    return this.get(`match/${matchId}/metadata`)
  }

  getMatchPlayers(matchId) {
    return this.get(`match/${matchId}/players`)
  }

  getMatchScores(matchId) {
    return this.get(`match/${matchId}/score`)
  }

  getMatchTeams(matchId) {
    return this.get(`match/${matchId}/teams`)
  }

  getMatchSpecial(matchId) {
    return this.get(`match/${matchId}/special`)
  }

  getMatchKills(matchId) {
    return this.get(`match/${matchId}/kill`)
  }

  getMatchBadges(matchId) {
    return this.get(`match/${matchId}/badge`)
  }

  getBoardBadges() {
    return this.get(`board/badges`)
  }

  getAllPlayers() {
    return this.get(`players`)
  }

  getTotalStats() {
    return this.get(`board/total`)
  }

  getMaps() {
    return this.get(`maps`)
  }

  setMapInfo(map_name, info) {
    var headers = new Headers()
    headers.set('Content-type', 'application/json')
    var req = new Request(
      `${this.endpoint}/map/size`, {
        method: 'POST',
        credentials: 'include',
        headers: headers,
        body: JSON.stringify({
          map_name: map_name,
          size: info.size,
          rate: info.rate})
      })
    fetch(req)
  }

  getPlayerKills(playerId) {
    return this.get(`player/${playerId}/kills`)
  }

  getPlayerDeaths(playerId) {
    return this.get(`player/${playerId}/deaths`)
  }
  getPlayerDeaths(playerId) {
    return this.get(`player/${playerId}/deaths`)
  }
  getPlayerBadges(playerId) {
    return this.get(`player/${playerId}/badges`)
  }

  getPlayer(playerId) {
    return this.get(`player/${playerId}`)
  }
}
