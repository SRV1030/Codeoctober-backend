// const Tracks = require('../models/track');

class TrackService {
    async getAllTracks() {
        try {
            // allTracks = await Tracks.find({});
            return "asdf";
        } catch (error) {
            console.error(error);
        }
    }

    // getTrack(id) {
    //     return this.http.get(`/api/tracks/${id}`);
    // }

    // createTrack(data) {
    //     return this.http.post('/api/tracks', data);
    // }

    // updateTrack(id, data) {
    //     return this.http.put(`/api/tracks/${id}`, data);
    // }

    // deleteTrack(id) {
    //     return this.http.delete(`/api/tracks/${id}`);
    // }
}

module.exports = TrackService;