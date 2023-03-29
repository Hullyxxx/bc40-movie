import axios from "axios"
import { BASE_URL, configHeaders, https } from "./config"

export const movieServ = {
    getMovieList: () => {
        return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
    },
    getMovieByTheater: () => {
        return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap")
    },
    getMovieInformation: (id) => {
       
        return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
    }
} 