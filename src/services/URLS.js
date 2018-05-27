export default class URLS {
    baseURL = 'http://localhost:5000/api/';
    // ACCOUNT
    LoginURL = this.baseURL + 'account/login';
    RegisterURL = this.baseURL + 'account/register';
    // MOVIE
    MovieURL = this.baseURL + 'movie';
    // CATEGORY
    CategoryURL = this.baseURL + 'category';
    // BILLBOARD
    BillboardURL = this.baseURL + 'billboard';
    // THEATER
    TheaterURL = this.baseURL + 'theater';
    // BILLBOARD MOVIE REGISTER
    BMRURL = this.baseURL + 'billboardmovieregister';
    // PROJECTION
    ProjectionURL = this.baseURL + 'projection';
    // RESERVATION
    ReservationURL = this.baseURL + 'reservation';
}