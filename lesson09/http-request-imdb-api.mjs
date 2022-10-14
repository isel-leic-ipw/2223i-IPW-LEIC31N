import fetch from 'node-fetch'



let jsonFetch = process.env.USE_API == "true" ? 
    function(uri) {
        console.log("Real request")
        return fetch(uri)
        .then(rsp => rsp.json())
    } :
    function jsonFetch(uri) {
        console.log("Fake request")
        return internalFetch(uri)
    }    


function internalFetch() {
    let jsonStr = `
    {
        "items": [
            {
                "id": "tt5491994",
                "rank": "1",
                "title": "Planet Earth II",
                "fullTitle": "Planet Earth II (2016)",
                "year": "2016",
                "image": "https://m.media-amazon.com/images/M/MV5BMGZmYmQ5NGQtNWQ1MC00NWZlLTg0MjYtYjJjMzQ5ODgxYzRkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "David Attenborough, Chadden Hunter",
                "imDbRating": "9.4",
                "imDbRatingCount": "143834"
            },
            {
                "id": "tt0903747",
                "rank": "2",
                "title": "Breaking Bad",
                "fullTitle": "Breaking Bad (2008)",
                "year": "2008",
                "image": "https://m.media-amazon.com/images/M/MV5BNDkyZThhNmMtZDBjYS00NDBmLTlkMjgtNWM2ZWYzZDQxZWU1XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Bryan Cranston, Aaron Paul",
                "imDbRating": "9.4",
                "imDbRatingCount": "1841407"
            },
            {
                "id": "tt0795176",
                "rank": "3",
                "title": "Planet Earth",
                "fullTitle": "Planet Earth (2006)",
                "year": "2006",
                "image": "https://m.media-amazon.com/images/M/MV5BMzMyYjg0MGMtMTlkMy00OGFiLWFiNTYtYmFmZWNmMDFlMzkwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Sigourney Weaver, David Attenborough",
                "imDbRating": "9.4",
                "imDbRatingCount": "208877"
            },
            {
                "id": "tt0185906",
                "rank": "4",
                "title": "Band of Brothers",
                "fullTitle": "Band of Brothers (2001)",
                "year": "2001",
                "image": "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Scott Grimes, Damian Lewis",
                "imDbRating": "9.4",
                "imDbRatingCount": "463261"
            },
            {
                "id": "tt7366338",
                "rank": "5",
                "title": "Chernobyl",
                "fullTitle": "Chernobyl (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jessie Buckley, Jared Harris",
                "imDbRating": "9.3",
                "imDbRatingCount": "737002"
            },
            {
                "id": "tt0306414",
                "rank": "6",
                "title": "The Wire",
                "fullTitle": "The Wire (2002)",
                "year": "2002",
                "image": "https://m.media-amazon.com/images/M/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Dominic West, Lance Reddick",
                "imDbRating": "9.3",
                "imDbRatingCount": "336429"
            },
            {
                "id": "tt6769208",
                "rank": "7",
                "title": "Blue Planet II",
                "fullTitle": "Blue Planet II (2017)",
                "year": "2017",
                "image": "https://m.media-amazon.com/images/M/MV5BNDZiNDllMTAtOTgxZi00NzNiLWFhNzUtOGUwZWZjZGNjZTMyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "David Attenborough, Peter Drost",
                "imDbRating": "9.2",
                "imDbRatingCount": "40962"
            },
            {
                "id": "tt0417299",
                "rank": "8",
                "title": "Avatar: The Last Airbender",
                "fullTitle": "Avatar: The Last Airbender (2005)",
                "year": "2005",
                "image": "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Dee Bradley Baker, Zach Tyler Eisen",
                "imDbRating": "9.2",
                "imDbRatingCount": "310410"
            },
            {
                "id": "tt2395695",
                "rank": "9",
                "title": "Cosmos: A Spacetime Odyssey",
                "fullTitle": "Cosmos: A Spacetime Odyssey (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BZTk5OTQyZjYtMDk3Yy00YjhmLWE2MTYtZmY4NTg1YWUzZTQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Neil deGrasse Tyson, Christopher Emerson",
                "imDbRating": "9.2",
                "imDbRatingCount": "121586"
            },
            {
                "id": "tt0141842",
                "rank": "10",
                "title": "The Sopranos",
                "fullTitle": "The Sopranos (1999)",
                "year": "1999",
                "image": "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "James Gandolfini, Lorraine Bracco",
                "imDbRating": "9.2",
                "imDbRatingCount": "392351"
            },
            {
                "id": "tt0081846",
                "rank": "11",
                "title": "Cosmos",
                "fullTitle": "Cosmos (1980)",
                "year": "1980",
                "image": "https://m.media-amazon.com/images/M/MV5BM2YzYzc0OWUtNmIwZi00MTBlLThjYTgtYmU1ODlhMzdjMzdjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Carl Sagan, Jaromír Hanzlík",
                "imDbRating": "9.2",
                "imDbRatingCount": "41111"
            },
            {
                "id": "tt9253866",
                "rank": "12",
                "title": "Our Planet",
                "fullTitle": "Our Planet (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BZmM2OWEyN2EtZWY2NS00ZDA3LWFlNTAtNzUzMGQwZWVlZmE4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "David Attenborough",
                "imDbRating": "9.2",
                "imDbRatingCount": "43309"
            },
            {
                "id": "tt0944947",
                "rank": "13",
                "title": "Game of Thrones",
                "fullTitle": "Game of Thrones (2011)",
                "year": "2011",
                "image": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Emilia Clarke, Peter Dinklage",
                "imDbRating": "9.1",
                "imDbRatingCount": "2063891"
            },
            {
                "id": "tt2861424",
                "rank": "14",
                "title": "Rick and Morty",
                "fullTitle": "Rick and Morty (2013)",
                "year": "2013",
                "image": "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Justin Roiland, Chris Parnell",
                "imDbRating": "9.1",
                "imDbRatingCount": "506812"
            },
            {
                "id": "tt0071075",
                "rank": "15",
                "title": "The World at War",
                "fullTitle": "The World at War (1973)",
                "year": "1973",
                "image": "https://m.media-amazon.com/images/M/MV5BZTIwOWEyMjctMjQwNS00ODZiLThmMWEtYWQ1OWFiYzQ2OWYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Laurence Olivier, Albert Speer",
                "imDbRating": "9.1",
                "imDbRatingCount": "25804"
            },
            {
                "id": "tt1355642",
                "rank": "16",
                "title": "Fullmetal Alchemist: Brotherhood",
                "fullTitle": "Fullmetal Alchemist: Brotherhood (2009)",
                "year": "2009",
                "image": "https://m.media-amazon.com/images/M/MV5BNTM4MzMxMWItYzc3NC00ODY0LTg0M2MtYjg4NDg0ZjM0MjdiXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Kent Williams, Iemasa Kayumi",
                "imDbRating": "9.1",
                "imDbRatingCount": "164808"
            },
            {
                "id": "tt8420184",
                "rank": "17",
                "title": "The Last Dance",
                "fullTitle": "The Last Dance (2020)",
                "year": "2020",
                "image": "https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Michael Jordan, Phil Jackson",
                "imDbRating": "9.0",
                "imDbRatingCount": "120554"
            },
            {
                "id": "tt1533395",
                "rank": "18",
                "title": "Life",
                "fullTitle": "Life (2009)",
                "year": "2009",
                "image": "https://m.media-amazon.com/images/M/MV5BNjJhMTAxZjYtNWZkYy00Nzg1LTlkYjItZTNhZWRjNzkxMDg3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Oprah Winfrey, David Attenborough",
                "imDbRating": "9.0",
                "imDbRatingCount": "40939"
            },
            {
                "id": "tt1475582",
                "rank": "19",
                "title": "Sherlock",
                "fullTitle": "Sherlock (2010)",
                "year": "2010",
                "image": "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Benedict Cumberbatch, Martin Freeman",
                "imDbRating": "9.0",
                "imDbRatingCount": "915855"
            },
            {
                "id": "tt0052520",
                "rank": "20",
                "title": "The Twilight Zone",
                "fullTitle": "The Twilight Zone (1959)",
                "year": "1959",
                "image": "https://m.media-amazon.com/images/M/MV5BNTAzMDI5MzgtMGNkMC00MzllLWJhNjctNjA1NmViNGUxMzYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Rod Serling, Robert McCord",
                "imDbRating": "9.0",
                "imDbRatingCount": "83067"
            },
            {
                "id": "tt1877514",
                "rank": "21",
                "title": "The Vietnam War",
                "fullTitle": "The Vietnam War (2017)",
                "year": "2017",
                "image": "https://m.media-amazon.com/images/M/MV5BZmY2NGMyY2EtMjJiMS00MmFlLTk1MmItZDA1NTQ0ODg0MDA4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Peter Coyote, Huy Duc",
                "imDbRating": "9.0",
                "imDbRatingCount": "24709"
            },
            {
                "id": "tt0103359",
                "rank": "22",
                "title": "Batman: The Animated Series",
                "fullTitle": "Batman: The Animated Series (1992)",
                "year": "1992",
                "image": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Kevin Conroy, Loren Lester",
                "imDbRating": "9.0",
                "imDbRatingCount": "103226"
            },
            {
                "id": "tt12392504",
                "rank": "23",
                "title": "Scam 1992: The Harshad Mehta Story",
                "fullTitle": "Scam 1992: The Harshad Mehta Story (2020)",
                "year": "2020",
                "image": "https://m.media-amazon.com/images/M/MV5BNjgxZTMxNmQtZGFkZS00NDUyLTllMzYtOTE0ZjdlMjM1ZWU0XkEyXkFqcGdeQXVyMTAyMTE1MDA1._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Pratik Gandhi, Shreya Dhanwanthary",
                "imDbRating": "9.0",
                "imDbRatingCount": "143068"
            },
            {
                "id": "tt11126994",
                "rank": "24",
                "title": "Arcane",
                "fullTitle": "Arcane (2021)",
                "year": "2021",
                "image": "https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Hailee Steinfeld, Kevin Alejandro",
                "imDbRating": "8.9",
                "imDbRatingCount": "198843"
            },
            {
                "id": "tt0296310",
                "rank": "25",
                "title": "The Blue Planet",
                "fullTitle": "The Blue Planet (2001)",
                "year": "2001",
                "image": "https://m.media-amazon.com/images/M/MV5BMjA4N2QzZGItY2IzOS00YTUyLWI5MzItNjRjNWEyODE3ZWQ4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "David Attenborough, Pierce Brosnan",
                "imDbRating": "8.9",
                "imDbRatingCount": "39608"
            },
            {
                "id": "tt2560140",
                "rank": "26",
                "title": "Attack on Titan",
                "fullTitle": "Attack on Titan (2013)",
                "year": "2013",
                "image": "https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Josh Grelle, Yûki Kaji",
                "imDbRating": "8.9",
                "imDbRatingCount": "365050"
            },
            {
                "id": "tt0386676",
                "rank": "27",
                "title": "The Office",
                "fullTitle": "The Office (2005)",
                "year": "2005",
                "image": "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Steve Carell, Jenna Fischer",
                "imDbRating": "8.9",
                "imDbRatingCount": "582364"
            },
            {
                "id": "tt0303461",
                "rank": "28",
                "title": "Firefly",
                "fullTitle": "Firefly (2002)",
                "year": "2002",
                "image": "https://m.media-amazon.com/images/M/MV5BOTcwNzkwMDItZmM1OC00MmQ2LTgxYjgtOTNiNDgxZDAxMjk0XkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Nathan Fillion, Gina Torres",
                "imDbRating": "8.9",
                "imDbRatingCount": "264518"
            },
            {
                "id": "tt1806234",
                "rank": "29",
                "title": "Human Planet",
                "fullTitle": "Human Planet (2011)",
                "year": "2011",
                "image": "https://m.media-amazon.com/images/M/MV5BMjM4NWMzNDgtZjQ4Zi00NWEyLWIzNTYtZjVjZGVhMmY1NTQyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "John Hurt, Roger Munns",
                "imDbRating": "8.9",
                "imDbRatingCount": "26358"
            },
            {
                "id": "tt2092588",
                "rank": "30",
                "title": "Frozen Planet",
                "fullTitle": "Frozen Planet (2011)",
                "year": "2011",
                "image": "https://m.media-amazon.com/images/M/MV5BYjdlMGYwYWQtODVlMi00Y2I0LThiYzgtYTM0YmU5NzdhYTI0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "David Attenborough, Alec Baldwin",
                "imDbRating": "8.9",
                "imDbRatingCount": "30554"
            },
            {
                "id": "tt0877057",
                "rank": "31",
                "title": "Death Note",
                "fullTitle": "Death Note (2006)",
                "year": "2006",
                "image": "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Mamoru Miyano, Brad Swaile",
                "imDbRating": "8.9",
                "imDbRatingCount": "317788"
            },
            {
                "id": "tt0081912",
                "rank": "32",
                "title": "Only Fools and Horses",
                "fullTitle": "Only Fools and Horses (1981)",
                "year": "1981",
                "image": "https://m.media-amazon.com/images/M/MV5BYmI1NGIwNzYtOTVlMS00ZGYwLWE0ZTktYzVmMGVlMmRmN2QxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "David Jason, Nicholas Lyndhurst",
                "imDbRating": "8.9",
                "imDbRatingCount": "51685"
            },
            {
                "id": "tt2098220",
                "rank": "33",
                "title": "Hunter x Hunter",
                "fullTitle": "Hunter x Hunter (2011)",
                "year": "2011",
                "image": "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Issei Futamata, Megumi Han",
                "imDbRating": "8.9",
                "imDbRatingCount": "96846"
            },
            {
                "id": "tt0098769",
                "rank": "34",
                "title": "The Civil War",
                "fullTitle": "The Civil War (1990)",
                "year": "1990",
                "image": "https://m.media-amazon.com/images/M/MV5BZjE1ODNkYzctNjM0Ni00MmM3LTkyMjctZGRhYzA3YzhjMTFlXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "David McCullough, Sam Waterston",
                "imDbRating": "8.9",
                "imDbRatingCount": "16549"
            },
            {
                "id": "tt2356777",
                "rank": "35",
                "title": "True Detective",
                "fullTitle": "True Detective (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BMmRlYmE0Y2UtNDk2Yi00NzczLWEwZTEtZmE2OTcyYzcxYmU5XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Vince Vaughn, Colin Farrell",
                "imDbRating": "8.9",
                "imDbRatingCount": "564288"
            },
            {
                "id": "tt0098904",
                "rank": "36",
                "title": "Seinfeld",
                "fullTitle": "Seinfeld (1989)",
                "year": "1989",
                "image": "https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Jerry Seinfeld, Julia Louis-Dreyfus",
                "imDbRating": "8.9",
                "imDbRatingCount": "315202"
            },
            {
                "id": "tt9735318",
                "rank": "37",
                "title": "The Beatles: Get Back",
                "fullTitle": "The Beatles: Get Back (2021)",
                "year": "2021",
                "image": "https://m.media-amazon.com/images/M/MV5BNjMxMjE5ZTEtMjgyOC00ODM4LWJjZDAtMjcwZDBlNzZhZTkyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "The Beatles, John Lennon",
                "imDbRating": "8.9",
                "imDbRatingCount": "22117"
            },
            {
                "id": "tt7920978",
                "rank": "38",
                "title": "Persona",
                "fullTitle": "Persona (2018)",
                "year": "2018",
                "image": "https://m.media-amazon.com/images/M/MV5BOTJkNzJmYzgtZTZmNC00MTQ2LWE2ZGQtM2EyYjliNGViMTY5XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Haluk Bilginer, Cansu Dere",
                "imDbRating": "8.9",
                "imDbRatingCount": "41011"
            },
            {
                "id": "tt0092337",
                "rank": "39",
                "title": "Dekalog",
                "fullTitle": "Dekalog (1989)",
                "year": "1989",
                "image": "https://m.media-amazon.com/images/M/MV5BNDgzZDVmZjYtYmNhNi00YTE0LWJmNDAtODZiNWIwMjJhZDhhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Artur Barcis, Olgierd Lukaszewicz",
                "imDbRating": "8.9",
                "imDbRatingCount": "25697"
            },
            {
                "id": "tt3032476",
                "rank": "40",
                "title": "Better Call Saul",
                "fullTitle": "Better Call Saul (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BMTMxOGM0NzItM2E0OS00YWYzLWEzNzUtODUzZTBjM2I4MTZkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Bob Odenkirk, Rhea Seehorn",
                "imDbRating": "8.9",
                "imDbRatingCount": "508031"
            },
            {
                "id": "tt2802850",
                "rank": "41",
                "title": "Fargo",
                "fullTitle": "Fargo (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BN2NiMGE5M2UtNWNlNC00N2Y4LTkwOWUtMDlkMzEwNTcyOTcyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Billy Bob Thornton, Martin Freeman",
                "imDbRating": "8.9",
                "imDbRatingCount": "370767"
            },
            {
                "id": "tt10541088",
                "rank": "42",
                "title": "Clarkson's Farm",
                "fullTitle": "Clarkson's Farm (2021)",
                "year": "2021",
                "image": "https://m.media-amazon.com/images/M/MV5BYWI5M2YyYmYtMzBkNy00YWYyLThjZGUtYzEyOTQxZDQyYmVhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jeremy Clarkson, Kaleb Cooper",
                "imDbRating": "8.9",
                "imDbRatingCount": "35844"
            },
            {
                "id": "tt0213338",
                "rank": "43",
                "title": "Cowboy Bebop",
                "fullTitle": "Cowboy Bebop (1998)",
                "year": "1998",
                "image": "https://m.media-amazon.com/images/M/MV5BZDgyODhlNWUtMWJhZS00OGQ4LTk4ZjQtNjY4OTgzY2YzYWI3XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Kôichi Yamadera, Unshô Ishizuka",
                "imDbRating": "8.9",
                "imDbRatingCount": "118340"
            },
            {
                "id": "tt2297757",
                "rank": "44",
                "title": "Nathan for You",
                "fullTitle": "Nathan for You (2013)",
                "year": "2013",
                "image": "https://m.media-amazon.com/images/M/MV5BOGY4ZWM1MDUtZmM3MS00ZjAxLTkyYzMtMjgxODI1YzkzNGUwXkEyXkFqcGdeQXVyNzk2NzE5Mjk@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Nathan Fielder, Anthony Filosa",
                "imDbRating": "8.8",
                "imDbRatingCount": "30133"
            },
            {
                "id": "tt1865718",
                "rank": "45",
                "title": "Gravity Falls",
                "fullTitle": "Gravity Falls (2012)",
                "year": "2012",
                "image": "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jason Ritter, Alex Hirsch",
                "imDbRating": "8.8",
                "imDbRatingCount": "106155"
            },
            {
                "id": "tt7137906",
                "rank": "46",
                "title": "When They See Us",
                "fullTitle": "When They See Us (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BZmJjM2YzOWEtOTYxYi00YjhkLTliMzgtMTA2MTc0NDQ1MDM4XkEyXkFqcGdeQXVyODY5OTk4MA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Asante Blackk, Caleel Harris",
                "imDbRating": "8.8",
                "imDbRatingCount": "119879"
            },
            {
                "id": "tt3530232",
                "rank": "47",
                "title": "Last Week Tonight with John Oliver",
                "fullTitle": "Last Week Tonight with John Oliver (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BYTE2MTcwZmYtNDk2OC00YzkwLTllYjgtMmJkODczZTkxNjllXkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "John Oliver, David Kaye",
                "imDbRating": "8.8",
                "imDbRatingCount": "88653"
            },
            {
                "id": "tt0108778",
                "rank": "48",
                "title": "Friends",
                "fullTitle": "Friends (1994)",
                "year": "1994",
                "image": "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jennifer Aniston, Courteney Cox",
                "imDbRating": "8.8",
                "imDbRatingCount": "982199"
            },
            {
                "id": "tt4742876",
                "rank": "49",
                "title": "TVF Pitchers",
                "fullTitle": "TVF Pitchers (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BMjQwNTQ5MjAxNF5BMl5BanBnXkFtZTgwNTU0MDA3NjE@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Naveen Kasturia, Arunabh Kumar",
                "imDbRating": "8.8",
                "imDbRatingCount": "67263"
            },
            {
                "id": "tt2571774",
                "rank": "50",
                "title": "Africa",
                "fullTitle": "Africa (2013)",
                "year": "2013",
                "image": "https://m.media-amazon.com/images/M/MV5BNDdkZGViNzctZTJkMy00N2ZmLTg4NTUtZWM3YTE3ZTE3NjYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "David Attenborough, Simon Blakeney",
                "imDbRating": "8.8",
                "imDbRatingCount": "16071"
            },
            {
                "id": "tt1508238",
                "rank": "51",
                "title": "Apocalypse: The Second World War",
                "fullTitle": "Apocalypse: The Second World War (2009)",
                "year": "2009",
                "image": "https://m.media-amazon.com/images/M/MV5BMzEyMmM1ZGMtZTgwMS00Y2Y4LTg0MTItMGRiZGE3YTVhYjU3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY176_CR3,0,128,176_AL_.jpg",
                "crew": "Mathieu Kassovitz, Martin Sheen",
                "imDbRating": "8.8",
                "imDbRatingCount": "12579"
            },
            {
                "id": "tt0063929",
                "rank": "52",
                "title": "Monty Python's Flying Circus",
                "fullTitle": "Monty Python's Flying Circus (1969)",
                "year": "1969",
                "image": "https://m.media-amazon.com/images/M/MV5BZGI1N2FiYTYtOWU3Mi00MjBlLWJkMGMtMjZmZTQwMDdiYjY3XkEyXkFqcGdeQXVyMTIwMjIwNjQ2._V1_UY176_CR8,0,128,176_AL_.jpg",
                "crew": "Graham Chapman, John Cleese",
                "imDbRating": "8.8",
                "imDbRatingCount": "74192"
            },
            {
                "id": "tt0472954",
                "rank": "53",
                "title": "It's Always Sunny in Philadelphia",
                "fullTitle": "It's Always Sunny in Philadelphia (2005)",
                "year": "2005",
                "image": "https://m.media-amazon.com/images/M/MV5BMzg3ODVjZTYtZTAyNC00MzVjLTk3NmUtMGI4ZjZmNGQ1NmY4XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Charlie Day, Rob McElhenney",
                "imDbRating": "8.8",
                "imDbRatingCount": "223474"
            },
            {
                "id": "tt4934214",
                "rank": "54",
                "title": "Taskmaster",
                "fullTitle": "Taskmaster (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BMTNlYzY0MTItZmI5Ni00ODEwLTkxNDktOTI3MGI1ODRmODJlXkEyXkFqcGdeQXVyMDE4MzA0NQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Greg Davies, Alex Horne",
                "imDbRating": "8.8",
                "imDbRatingCount": "12473"
            },
            {
                "id": "tt0081834",
                "rank": "55",
                "title": "Das Boot",
                "fullTitle": "Das Boot (1985)",
                "year": "1985",
                "image": "https://m.media-amazon.com/images/M/MV5BNTBhZTQzZGEtZmRiOS00MzAwLWI5MzQtYTc1YTRhMzU3NzQ5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Jürgen Prochnow, Herbert Grönemeyer",
                "imDbRating": "8.8",
                "imDbRatingCount": "30236"
            },
            {
                "id": "tt0264235",
                "rank": "56",
                "title": "Curb Your Enthusiasm",
                "fullTitle": "Curb Your Enthusiasm (2000)",
                "year": "2000",
                "image": "https://m.media-amazon.com/images/M/MV5BMzE3ZDA4OWItOGY2ZC00MzVmLTk0Y2QtNzEzMjc5YWI5ZWFiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Larry David, Cheryl Hines",
                "imDbRating": "8.8",
                "imDbRatingCount": "127866"
            },
            {
                "id": "tt0200276",
                "rank": "57",
                "title": "The West Wing",
                "fullTitle": "The West Wing (1999)",
                "year": "1999",
                "image": "https://m.media-amazon.com/images/M/MV5BNjk3ZWE3ZDctN2Q1YS00NzNhLWFjNmYtZTkwYWQxZmQ3NzM3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Martin Sheen, Rob Lowe",
                "imDbRating": "8.8",
                "imDbRatingCount": "75605"
            },
            {
                "id": "tt0112130",
                "rank": "58",
                "title": "Pride and Prejudice",
                "fullTitle": "Pride and Prejudice (1995)",
                "year": "1995",
                "image": "https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Colin Firth, Jennifer Ehle",
                "imDbRating": "8.8",
                "imDbRatingCount": "84872"
            },
            {
                "id": "tt1831164",
                "rank": "59",
                "title": "Leyla and Mecnun",
                "fullTitle": "Leyla and Mecnun (2011)",
                "year": "2011",
                "image": "https://m.media-amazon.com/images/M/MV5BZGZlN2QzYTQtNmZkMy00YjdiLWIwOGUtMzlhZTJlMmIyNmJhXkEyXkFqcGdeQXVyOTQ2MjQ3MTI@._V1_UY176_CR6,0,128,176_AL_.jpg",
                "crew": "Ali Atay, Serkan Keskin",
                "imDbRating": "8.8",
                "imDbRatingCount": "93696"
            },
            {
                "id": "tt0072500",
                "rank": "60",
                "title": "Fawlty Towers",
                "fullTitle": "Fawlty Towers (1975)",
                "year": "1975",
                "image": "https://m.media-amazon.com/images/M/MV5BNzg2NWQ5MDQtMWY0MC00MWFiLWIyMDEtYTI2MTMzN2YzOTI0XkEyXkFqcGdeQXVyNTA4NzExMDg@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "John Cleese, Prunella Scales",
                "imDbRating": "8.8",
                "imDbRatingCount": "93099"
            },
            {
                "id": "tt0193676",
                "rank": "61",
                "title": "Freaks and Geeks",
                "fullTitle": "Freaks and Geeks (1999)",
                "year": "1999",
                "image": "https://m.media-amazon.com/images/M/MV5BZWJhOGFiZWMtYTY5Ni00NGU1LWE5OWItNzA5NThkNWUwYzc4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Linda Cardellini, John Francis Daley",
                "imDbRating": "8.8",
                "imDbRatingCount": "142431"
            },
            {
                "id": "tt0096548",
                "rank": "62",
                "title": "Blackadder Goes Forth",
                "fullTitle": "Blackadder Goes Forth (1989)",
                "year": "1989",
                "image": "https://m.media-amazon.com/images/M/MV5BMTQ0OTc1NTU1NV5BMl5BanBnXkFtZTcwNDk1NDYxMQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Rowan Atkinson, Tony Robinson",
                "imDbRating": "8.7",
                "imDbRatingCount": "52894"
            },
            {
                "id": "tt0098936",
                "rank": "63",
                "title": "Twin Peaks",
                "fullTitle": "Twin Peaks (1990)",
                "year": "1990",
                "image": "https://m.media-amazon.com/images/M/MV5BMTExNzk2NjcxNTNeQTJeQWpwZ15BbWU4MDcxOTczOTIx._V1_UY176_CR3,0,128,176_AL_.jpg",
                "crew": "Kyle MacLachlan, Michael Ontkean",
                "imDbRating": "8.7",
                "imDbRatingCount": "196654"
            },
            {
                "id": "tt2085059",
                "rank": "64",
                "title": "Black Mirror",
                "fullTitle": "Black Mirror (2011)",
                "year": "2011",
                "image": "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Daniel Lapaine, Hannah John-Kamen",
                "imDbRating": "8.7",
                "imDbRatingCount": "537835"
            },
            {
                "id": "tt2707408",
                "rank": "65",
                "title": "Narcos",
                "fullTitle": "Narcos (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Pedro Pascal, Wagner Moura",
                "imDbRating": "8.7",
                "imDbRatingCount": "417576"
            },
            {
                "id": "tt3398228",
                "rank": "66",
                "title": "BoJack Horseman",
                "fullTitle": "BoJack Horseman (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Will Arnett, Amy Sedaris",
                "imDbRating": "8.7",
                "imDbRatingCount": "153695"
            },
            {
                "id": "tt0353049",
                "rank": "67",
                "title": "Chappelle's Show",
                "fullTitle": "Chappelle's Show (2003)",
                "year": "2003",
                "image": "https://m.media-amazon.com/images/M/MV5BOWNjYTg5NGMtOWRjNy00ZGNlLTg2MmYtZjQ5NTM0MTQxOGM2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Dave Chappelle, Donnell Rawlings",
                "imDbRating": "8.7",
                "imDbRatingCount": "64481"
            },
            {
                "id": "tt7660850",
                "rank": "68",
                "title": "Succession",
                "fullTitle": "Succession (2018)",
                "year": "2018",
                "image": "https://m.media-amazon.com/images/M/MV5BZDE0ODVlYjktNjJiMC00ODk4LWIwNTktMWRhZmZiOGFhYmUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY176_CR6,0,128,176_AL_.jpg",
                "crew": "Nicholas Braun, Peter Friedman",
                "imDbRating": "8.7",
                "imDbRatingCount": "142499"
            },
            {
                "id": "tt0214341",
                "rank": "69",
                "title": "Dragon Ball Z",
                "fullTitle": "Dragon Ball Z (1989)",
                "year": "1989",
                "image": "https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Doc Harris, Christopher Sabat",
                "imDbRating": "8.7",
                "imDbRatingCount": "130088"
            },
            {
                "id": "tt0121220",
                "rank": "70",
                "title": "Dragon Ball Z",
                "fullTitle": "Dragon Ball Z (1989)",
                "year": "1989",
                "image": "https://m.media-amazon.com/images/M/MV5BZTI2Yzc1MTctMTIzOS00ZDljLTkzMDgtZDdiMWJiZWMxNjU2XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jôji Yanami, Kyle Hebert",
                "imDbRating": "8.7",
                "imDbRatingCount": "79621"
            },
            {
                "id": "tt0074006",
                "rank": "71",
                "title": "I, Claudius",
                "fullTitle": "I, Claudius (1976)",
                "year": "1976",
                "image": "https://m.media-amazon.com/images/M/MV5BZWM1MDY1MjYtYTAzZC00MDJiLTk4MjAtOGQzNDI4YWU1MWQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Derek Jacobi, John Hurt",
                "imDbRating": "8.7",
                "imDbRatingCount": "17606"
            },
            {
                "id": "tt0388629",
                "rank": "72",
                "title": "One Piece",
                "fullTitle": "One Piece (1999)",
                "year": "1999",
                "image": "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Mayumi Tanaka, Laurent Vernin",
                "imDbRating": "8.7",
                "imDbRatingCount": "122324"
            },
            {
                "id": "tt0121955",
                "rank": "73",
                "title": "South Park",
                "fullTitle": "South Park (1997)",
                "year": "1997",
                "image": "https://m.media-amazon.com/images/M/MV5BZjNhODYzZGItZWQ3Ny00ZjViLTkxMTUtM2EzN2RjYjU2OGZiXkEyXkFqcGdeQXVyMTI5MTc0OTIy._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Trey Parker, Matt Stone",
                "imDbRating": "8.7",
                "imDbRatingCount": "367056"
            },
            {
                "id": "tt0384766",
                "rank": "74",
                "title": "Rome",
                "fullTitle": "Rome (2005)",
                "year": "2005",
                "image": "https://m.media-amazon.com/images/M/MV5BYTM4MmU1NWYtNzJjYy00YWFhLThjOGEtZmMxOGI1NzE0NGNiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Kevin McKidd, Ray Stevenson",
                "imDbRating": "8.7",
                "imDbRatingCount": "171130"
            },
            {
                "id": "tt2442560",
                "rank": "75",
                "title": "Peaky Blinders",
                "fullTitle": "Peaky Blinders (2013)",
                "year": "2013",
                "image": "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_UY176_CR6,0,128,176_AL_.jpg",
                "crew": "Cillian Murphy, Paul Anderson",
                "imDbRating": "8.7",
                "imDbRatingCount": "534790"
            },
            {
                "id": "tt0248654",
                "rank": "76",
                "title": "Six Feet Under",
                "fullTitle": "Six Feet Under (2001)",
                "year": "2001",
                "image": "https://m.media-amazon.com/images/M/MV5BN2FmMjg0Y2YtYmMyYi00MTBjLTllYzMtN2VjYzRhOTVmNWRlXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Peter Krause, Michael C. Hall",
                "imDbRating": "8.7",
                "imDbRatingCount": "134797"
            },
            {
                "id": "tt10986410",
                "rank": "77",
                "title": "Ted Lasso",
                "fullTitle": "Ted Lasso (2020)",
                "year": "2020",
                "image": "https://m.media-amazon.com/images/M/MV5BMDVmODUzNmEtMGMxZC00NWUzLTkxMTAtMDM5OTQzMWE0ZDM3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jason Sudeikis, Brett Goldstein",
                "imDbRating": "8.7",
                "imDbRatingCount": "203674"
            },
            {
                "id": "tt0118421",
                "rank": "78",
                "title": "Oz",
                "fullTitle": "Oz (1997)",
                "year": "1997",
                "image": "https://m.media-amazon.com/images/M/MV5BYjY3N2M2YjgtZTFjZS00ODA1LWJjMDgtNDgxZDllZWFiMmYyXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Ernie Hudson, J.K. Simmons",
                "imDbRating": "8.7",
                "imDbRatingCount": "99214"
            },
            {
                "id": "tt3718778",
                "rank": "79",
                "title": "Over the Garden Wall",
                "fullTitle": "Over the Garden Wall (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BYzhjNzI0NWEtMzEyYy00OGViLThhMjctMWQxNGQ3Y2IzOTY4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Elijah Wood, Collin Dean",
                "imDbRating": "8.7",
                "imDbRatingCount": "55339"
            },
            {
                "id": "tt13675832",
                "rank": "80",
                "title": "As If",
                "fullTitle": "As If (2021)",
                "year": "2021",
                "image": "https://m.media-amazon.com/images/M/MV5BZTUzZjU0M2MtZGFmYy00ZWU0LWJjZGUtOGJlMTI4MWI4ZDUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UY176_CR6,0,128,176_AL_.jpg",
                "crew": "Feyyaz Yigit, Kivanç Kilinç",
                "imDbRating": "8.7",
                "imDbRatingCount": "12604"
            },
            {
                "id": "tt9432978",
                "rank": "81",
                "title": "Kota Factory",
                "fullTitle": "Kota Factory (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BOGVmMGYwZTEtOGFlYS00ODRhLTg3M2MtMzc1OGNhNzU3N2IzXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Mayur More, Jitendra Kumar",
                "imDbRating": "8.7",
                "imDbRatingCount": "71422"
            },
            {
                "id": "tt5753856",
                "rank": "82",
                "title": "Dark",
                "fullTitle": "Dark (2017)",
                "year": "2017",
                "image": "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Louis Hofmann, Karoline Eichhorn",
                "imDbRating": "8.7",
                "imDbRatingCount": "374028"
            },
            {
                "id": "tt8111088",
                "rank": "83",
                "title": "The Mandalorian",
                "fullTitle": "The Mandalorian (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Pedro Pascal, Carl Weathers",
                "imDbRating": "8.7",
                "imDbRatingCount": "466965"
            },
            {
                "id": "tt1910272",
                "rank": "84",
                "title": "Steins;Gate",
                "fullTitle": "Steins;Gate (2011)",
                "year": "2011",
                "image": "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Mamoru Miyano, Asami Imai",
                "imDbRating": "8.7",
                "imDbRatingCount": "61485"
            },
            {
                "id": "tt0367279",
                "rank": "85",
                "title": "Arrested Development",
                "fullTitle": "Arrested Development (2003)",
                "year": "2003",
                "image": "https://m.media-amazon.com/images/M/MV5BNTFlYTE2YTItZmQ1NS00ZWQ5LWI3OGUtYTQzNDMyZmEyYTZjXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jason Bateman, Michael Cera",
                "imDbRating": "8.7",
                "imDbRatingCount": "303341"
            },
            {
                "id": "tt1190634",
                "rank": "86",
                "title": "The Boys",
                "fullTitle": "The Boys (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UY176_CR6,0,128,176_AL_.jpg",
                "crew": "Karl Urban, Jack Quaid",
                "imDbRating": "8.7",
                "imDbRatingCount": "478546"
            },
            {
                "id": "tt4508902",
                "rank": "87",
                "title": "One Punch Man",
                "fullTitle": "One Punch Man (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Makoto Furukawa, Kaito Ishikawa",
                "imDbRating": "8.7",
                "imDbRatingCount": "156544"
            },
            {
                "id": "tt0096697",
                "rank": "88",
                "title": "The Simpsons",
                "fullTitle": "The Simpsons (1989)",
                "year": "1989",
                "image": "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Dan Castellaneta, Nancy Cartwright",
                "imDbRating": "8.7",
                "imDbRatingCount": "403863"
            },
            {
                "id": "tt0412142",
                "rank": "89",
                "title": "House",
                "fullTitle": "House (2004)",
                "year": "2004",
                "image": "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Hugh Laurie, Omar Epps",
                "imDbRating": "8.7",
                "imDbRatingCount": "459876"
            },
            {
                "id": "tt0286486",
                "rank": "90",
                "title": "The Shield",
                "fullTitle": "The Shield (2002)",
                "year": "2002",
                "image": "https://m.media-amazon.com/images/M/MV5BMTcwNzQwODI5NV5BMl5BanBnXkFtZTcwNzQxMjI5MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Michael Chiklis, Jay Karnes",
                "imDbRating": "8.7",
                "imDbRatingCount": "80781"
            },
            {
                "id": "tt5687612",
                "rank": "91",
                "title": "Fleabag",
                "fullTitle": "Fleabag (2016)",
                "year": "2016",
                "image": "https://m.media-amazon.com/images/M/MV5BMjA4MzU5NzQxNV5BMl5BanBnXkFtZTgwOTg3MDA5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Phoebe Waller-Bridge, Sian Clifford",
                "imDbRating": "8.7",
                "imDbRatingCount": "152658"
            },
            {
                "id": "tt0407362",
                "rank": "92",
                "title": "Battlestar Galactica",
                "fullTitle": "Battlestar Galactica (2004)",
                "year": "2004",
                "image": "https://m.media-amazon.com/images/M/MV5BZjBjMjk4YWQtZjY1MC00NTI5LWEwZDMtYWMyYjk2MjkzMThhXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Edward James Olmos, Mary McDonnell",
                "imDbRating": "8.7",
                "imDbRatingCount": "165533"
            },
            {
                "id": "tt4574334",
                "rank": "93",
                "title": "Stranger Things",
                "fullTitle": "Stranger Things (2016)",
                "year": "2016",
                "image": "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY176_CR6,0,128,176_AL_.jpg",
                "crew": "Millie Bobby Brown, Finn Wolfhard",
                "imDbRating": "8.6",
                "imDbRatingCount": "1157106"
            },
            {
                "id": "tt1518542",
                "rank": "94",
                "title": "Sarabhai V/S Sarabhai",
                "fullTitle": "Sarabhai V/S Sarabhai (2004)",
                "year": "2004",
                "image": "https://m.media-amazon.com/images/M/MV5BNjYxNzBhMmQtZjM4Yy00MGZiLWFmNDAtYmVkZGM0MWNlMTU3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Satish Shah, Ratna Pathak Shah",
                "imDbRating": "8.6",
                "imDbRatingCount": "16827"
            },
            {
                "id": "tt1606375",
                "rank": "95",
                "title": "Downton Abbey",
                "fullTitle": "Downton Abbey (2010)",
                "year": "2010",
                "image": "https://m.media-amazon.com/images/M/MV5BY2U1NmIwYzgtNjFkOS00YWUxLTg0YTMtZmE5NTA3YjRmY2NlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Hugh Bonneville, Phyllis Logan",
                "imDbRating": "8.6",
                "imDbRatingCount": "205451"
            },
            {
                "id": "tt6741278",
                "rank": "96",
                "title": "Invincible",
                "fullTitle": "Invincible (2021)",
                "year": "2021",
                "image": "https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Steven Yeun, J.K. Simmons",
                "imDbRating": "8.6",
                "imDbRatingCount": "132540"
            },
            {
                "id": "tt10530900",
                "rank": "97",
                "title": "Gullak",
                "fullTitle": "Gullak (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BN2QwZmNhZjctZDZkMi00Mjk2LTg4OWMtNGEzMjk1ZWIwN2IzXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jameel Khan, Geetanjali Kulkarni",
                "imDbRating": "8.6",
                "imDbRatingCount": "17045"
            },
            {
                "id": "tt0804503",
                "rank": "98",
                "title": "Mad Men",
                "fullTitle": "Mad Men (2007)",
                "year": "2007",
                "image": "https://m.media-amazon.com/images/M/MV5BNTgxNDZlODQtNDcwOC00NWQ5LTljNWMtMDhjY2U5YTUzMTc4XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jon Hamm, Elisabeth Moss",
                "imDbRating": "8.6",
                "imDbRatingCount": "237596"
            },
            {
                "id": "tt10233448",
                "rank": "99",
                "title": "Vinland Saga",
                "fullTitle": "Vinland Saga (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BMWE4OWE0NmMtYjlmOC00NGE1LWJiNDItNDgxNzVjYzViMGQ3XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Zach Aguilar, William Christopher Stephens",
                "imDbRating": "8.6",
                "imDbRatingCount": "37204"
            },
            {
                "id": "tt12004706",
                "rank": "100",
                "title": "Panchayat",
                "fullTitle": "Panchayat (2020)",
                "year": "2020",
                "image": "https://m.media-amazon.com/images/M/MV5BZDkxODJmNDktZDcxMy00MGJkLWI3NzEtNzVkYTdkZWI0ZmVkXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Jitendra Kumar, Raghuvir Yadav",
                "imDbRating": "8.6",
                "imDbRatingCount": "69624"
            },
            {
                "id": "tt5788792",
                "rank": "101",
                "title": "The Marvelous Mrs. Maisel",
                "fullTitle": "The Marvelous Mrs. Maisel (2017)",
                "year": "2017",
                "image": "https://m.media-amazon.com/images/M/MV5BMzk2ZmFhNjMtOWM2YS00MGU4LTk3ODMtY2Q2MjU2ODA0MDg4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Rachel Brosnahan, Alex Borstein",
                "imDbRating": "8.6",
                "imDbRatingCount": "113271"
            },
            {
                "id": "tt0387764",
                "rank": "102",
                "title": "Peep Show",
                "fullTitle": "Peep Show (2003)",
                "year": "2003",
                "image": "https://m.media-amazon.com/images/M/MV5BZjYwMWJhOWMtZTc5ZC00MGY0LTg0ZjktMzFhODhhZGZhNDRjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "David Mitchell, Robert Webb",
                "imDbRating": "8.6",
                "imDbRatingCount": "60247"
            },
            {
                "id": "tt1856010",
                "rank": "103",
                "title": "House of Cards",
                "fullTitle": "House of Cards (2013)",
                "year": "2013",
                "image": "https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Kevin Spacey, Michel Gill",
                "imDbRating": "8.6",
                "imDbRatingCount": "501710"
            },
            {
                "id": "tt11280740",
                "rank": "104",
                "title": "Severance",
                "fullTitle": "Severance (2022)",
                "year": "2022",
                "image": "https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Adam Scott, Zach Cherry",
                "imDbRating": "8.6",
                "imDbRatingCount": "105207"
            },
            {
                "id": "tt0092455",
                "rank": "105",
                "title": "Star Trek: The Next Generation",
                "fullTitle": "Star Trek: The Next Generation (1987)",
                "year": "1987",
                "image": "https://m.media-amazon.com/images/M/MV5BOWFhYjE4NzMtOWJmZi00NzEyLTg5NTctYmIxMTU1ZDIxMDAyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Patrick Stewart, Brent Spiner",
                "imDbRating": "8.6",
                "imDbRatingCount": "119954"
            },
            {
                "id": "tt4786824",
                "rank": "106",
                "title": "The Crown",
                "fullTitle": "The Crown (2016)",
                "year": "2016",
                "image": "https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctNTRmNy00Njk3LWFjMzctMWQwZDAwMGJmY2MyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Claire Foy, Olivia Colman",
                "imDbRating": "8.6",
                "imDbRatingCount": "202916"
            },
            {
                "id": "tt0758745",
                "rank": "107",
                "title": "Friday Night Lights",
                "fullTitle": "Friday Night Lights (2006)",
                "year": "2006",
                "image": "https://m.media-amazon.com/images/M/MV5BYTkxZDVhZGItZjM3Yi00YTU1LTk2ZDYtYTI4NTg2Mjc0NWY1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Kyle Chandler, Connie Britton",
                "imDbRating": "8.6",
                "imDbRatingCount": "66414"
            },
            {
                "id": "tt0086661",
                "rank": "108",
                "title": "The Adventures of Sherlock Holmes",
                "fullTitle": "The Adventures of Sherlock Holmes (1984)",
                "year": "1984",
                "image": "https://m.media-amazon.com/images/M/MV5BOTU0ODg2ODMtZDQ0OS00N2MzLWIwYWUtZDQ2N2E2ZTZiNzI1XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Jeremy Brett, David Burke",
                "imDbRating": "8.6",
                "imDbRatingCount": "22327"
            },
            {
                "id": "tt1628033",
                "rank": "109",
                "title": "Top Gear",
                "fullTitle": "Top Gear (2002)",
                "year": "2002",
                "image": "https://m.media-amazon.com/images/M/MV5BYzkwZDgwZmQtOWE4Yy00ZjgyLTgxZTYtZTRiMTg5MWY4NTFiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Jeremy Clarkson, Richard Hammond",
                "imDbRating": "8.6",
                "imDbRatingCount": "118498"
            },
            {
                "id": "tt5712554",
                "rank": "110",
                "title": "The Grand Tour",
                "fullTitle": "The Grand Tour (2016)",
                "year": "2016",
                "image": "https://m.media-amazon.com/images/M/MV5BYjkyOWIyZGYtYzU3ZS00NWM2LThjZGEtMDZjZjg2MTI2NzBhXkEyXkFqcGdeQXVyNjI4OTg2Njg@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jeremy Clarkson, James May",
                "imDbRating": "8.6",
                "imDbRatingCount": "74951"
            },
            {
                "id": "tt0318871",
                "rank": "111",
                "title": "Berserk",
                "fullTitle": "Berserk (1997)",
                "year": "1997",
                "image": "https://m.media-amazon.com/images/M/MV5BZWIzNzQ3ZDctODYxYi00YjUwLTg1MDgtMDg4Mzc0NWM4ZGY0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Marc Diraison, Nobutoshi Canna",
                "imDbRating": "8.6",
                "imDbRatingCount": "38962"
            },
            {
                "id": "tt0459159",
                "rank": "112",
                "title": "The Thick of It",
                "fullTitle": "The Thick of It (2005)",
                "year": "2005",
                "image": "https://m.media-amazon.com/images/M/MV5BZjc0ZDA5OTItYzhjNi00ZTJjLTg4OTYtZjk3NzBhODRlMTViXkEyXkFqcGdeQXVyMjc5OTMxMzQ@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Chris Addison, James Smith",
                "imDbRating": "8.6",
                "imDbRatingCount": "23581"
            },
            {
                "id": "tt13991232",
                "rank": "113",
                "title": "1883",
                "fullTitle": "1883 (2021)",
                "year": "2021",
                "image": "https://m.media-amazon.com/images/M/MV5BNDZkZDdkMjYtMGI3Yi00MmVkLTkzZjQtMGI0NGViNzIzNjhjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Sam Elliott, Tim McGraw",
                "imDbRating": "8.6",
                "imDbRatingCount": "63670"
            },
            {
                "id": "tt6025022",
                "rank": "114",
                "title": "Justice League Unlimited",
                "fullTitle": "Justice League Unlimited (2004)",
                "year": "2004",
                "image": "https://m.media-amazon.com/images/M/MV5BMGQ0ZDlhNzctZDQ2Zi00OWNlLWI5YWQtNzc4MjQ1YjAzMDI1XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "George Newbern, Kevin Conroy",
                "imDbRating": "8.6",
                "imDbRatingCount": "16192"
            },
            {
                "id": "tt2303687",
                "rank": "115",
                "title": "Line of Duty",
                "fullTitle": "Line of Duty (2012)",
                "year": "2012",
                "image": "https://m.media-amazon.com/images/M/MV5BMTExZDZjNTMtNDVmNy00ZTk2LWFiMzUtZDlkZGRlOGU0ZWRmXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Martin Compston, Vicky McClure",
                "imDbRating": "8.6",
                "imDbRatingCount": "58693"
            },
            {
                "id": "tt0348914",
                "rank": "116",
                "title": "Deadwood",
                "fullTitle": "Deadwood (2004)",
                "year": "2004",
                "image": "https://m.media-amazon.com/images/M/MV5BNDJhMjUzMDYtNzc4MS00Nzk2LTkyMGQtN2M5NTczYTZmYmY5XkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Timothy Olyphant, Ian McShane",
                "imDbRating": "8.6",
                "imDbRatingCount": "107024"
            },
            {
                "id": "tt0158417",
                "rank": "117",
                "title": "Mahabharat",
                "fullTitle": "Mahabharat (1988)",
                "year": "1988",
                "image": "https://m.media-amazon.com/images/M/MV5BMGE1MTlmNmYtMTg4Zi00NWRmLWIxMzktMTViNjRmYTQ5NDI2XkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Harish Bhimani, Nitish Bharadwaj",
                "imDbRating": "8.6",
                "imDbRatingCount": "18922"
            },
            {
                "id": "tt0773262",
                "rank": "118",
                "title": "Dexter",
                "fullTitle": "Dexter (2006)",
                "year": "2006",
                "image": "https://m.media-amazon.com/images/M/MV5BZjkzMmU5MjMtODllZS00OTA5LTk2ZTEtNjdhYjZhMDA5ZTRhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Michael C. Hall, Jennifer Carpenter",
                "imDbRating": "8.6",
                "imDbRatingCount": "721744"
            },
            {
                "id": "tt0106179",
                "rank": "119",
                "title": "The X-Files",
                "fullTitle": "The X-Files (1993)",
                "year": "1993",
                "image": "https://m.media-amazon.com/images/M/MV5BZDA0MmM4YzUtMzYwZC00OGI2LWE0ODctNzNhNTkwN2FmNTVhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "David Duchovny, Gillian Anderson",
                "imDbRating": "8.6",
                "imDbRatingCount": "224090"
            },
            {
                "id": "tt1266020",
                "rank": "120",
                "title": "Parks and Recreation",
                "fullTitle": "Parks and Recreation (2009)",
                "year": "2009",
                "image": "https://m.media-amazon.com/images/M/MV5BYWNkOTg0OTMtZTcyNy00MWU1LWJhZDQtYjQzMjU1NjBhYzI2XkEyXkFqcGdeQXVyOTE4NzcwNzI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Amy Poehler, Jim O'Heir",
                "imDbRating": "8.6",
                "imDbRatingCount": "256477"
            },
            {
                "id": "tt0111958",
                "rank": "121",
                "title": "Father Ted",
                "fullTitle": "Father Ted (1995)",
                "year": "1995",
                "image": "https://m.media-amazon.com/images/M/MV5BYzI2YzQ5MWMtZGU0OC00ZDZkLWFiMGQtMWQzNmQ2Y2E3NDUyXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY176_CR3,0,128,176_AL_.jpg",
                "crew": "Dermot Morgan, Ardal O'Hanlon",
                "imDbRating": "8.6",
                "imDbRatingCount": "40462"
            },
            {
                "id": "tt4299972",
                "rank": "122",
                "title": "The Jinx: The Life and Deaths of Robert Durst",
                "fullTitle": "The Jinx: The Life and Deaths of Robert Durst (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BMjI0OTc3MzY5Ml5BMl5BanBnXkFtZTgwNjk3MDUyNDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Andrew Jarecki, Robert Durst",
                "imDbRating": "8.6",
                "imDbRatingCount": "46382"
            },
            {
                "id": "tt14392248",
                "rank": "123",
                "title": "Aspirants",
                "fullTitle": "Aspirants (2021)",
                "year": "2021",
                "image": "https://m.media-amazon.com/images/M/MV5BNWRkMjA0NjItMmViYS00MDQyLTgyMWYtOWFmOTA4NmU5MjRjXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Naveen Kasturia, Shivankit Singh Parihar",
                "imDbRating": "8.6",
                "imDbRatingCount": "296496"
            },
            {
                "id": "tt10802170",
                "rank": "124",
                "title": "The Rehearsal",
                "fullTitle": "The Rehearsal (2022)",
                "year": "2022",
                "image": "https://m.media-amazon.com/images/M/MV5BNGI3ZTgwMzItMTA0ZC00NTFhLTkzNTQtMDBkMDc2NmVmY2NkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Nathan Fielder, Journey Baker",
                "imDbRating": "8.6",
                "imDbRatingCount": "14974"
            },
            {
                "id": "tt5555260",
                "rank": "125",
                "title": "This Is Us",
                "fullTitle": "This Is Us (2016)",
                "year": "2016",
                "image": "https://m.media-amazon.com/images/M/MV5BNzYxYWY3YzctZjRiNS00MTViLTk5OTYtZDEyNzAwNGE5ODY0XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Milo Ventimiglia, Mandy Moore",
                "imDbRating": "8.6",
                "imDbRatingCount": "142685"
            },
            {
                "id": "tt0988824",
                "rank": "126",
                "title": "Naruto: Shippûden",
                "fullTitle": "Naruto: Shippûden (2007)",
                "year": "2007",
                "image": "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Alexandre Crepet, Junko Takeuchi",
                "imDbRating": "8.6",
                "imDbRatingCount": "123705"
            },
            {
                "id": "tt1795096",
                "rank": "127",
                "title": "Behzat Ç.: Bir Ankara Polisiyesi",
                "fullTitle": "Behzat Ç.: Bir Ankara Polisiyesi (2010)",
                "year": "2010",
                "image": "https://m.media-amazon.com/images/M/MV5BZDZjY2I5ZjEtZGE2MS00ZjRmLTlmMGEtMDQ5ZmZhZWJjYzk3XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Erdal Besikçioglu, Inanç Konukçu",
                "imDbRating": "8.6",
                "imDbRatingCount": "29991"
            },
            {
                "id": "tt0088484",
                "rank": "128",
                "title": "Blackadder II",
                "fullTitle": "Blackadder II (1986)",
                "year": "1986",
                "image": "https://m.media-amazon.com/images/M/MV5BMTI4NDc1NDg0N15BMl5BanBnXkFtZTYwNjk0MTc5._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Rowan Atkinson, Tony Robinson",
                "imDbRating": "8.6",
                "imDbRatingCount": "46731"
            },
            {
                "id": "tt0994314",
                "rank": "129",
                "title": "Code Geass",
                "fullTitle": "Code Geass (2006)",
                "year": "2006",
                "image": "https://m.media-amazon.com/images/M/MV5BYzZjY2MzYTAtMmQxMi00MWVjLTlkZGQtYjJmNWVhODY3YjdjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Jun Fukuyama, Takahiro Sakurai",
                "imDbRating": "8.6",
                "imDbRatingCount": "67786"
            },
            {
                "id": "tt10638036",
                "rank": "130",
                "title": "Heartstopper",
                "fullTitle": "Heartstopper (2022)",
                "year": "2022",
                "image": "https://m.media-amazon.com/images/M/MV5BMTU1NmYwMTAtNzNjOS00NDNkLWI0ZmMtMDYxYWEyYzIxYTNjXkEyXkFqcGdeQXVyNjA1MTI4NjA@._V1_UY176_CR6,0,128,176_AL_.jpg",
                "crew": "Joe Locke, Kit Connor",
                "imDbRating": "8.6",
                "imDbRatingCount": "50183"
            },
            {
                "id": "tt1733785",
                "rank": "131",
                "title": "The Bridge",
                "fullTitle": "The Bridge (2011)",
                "year": "2011",
                "image": "https://m.media-amazon.com/images/M/MV5BMjQ3MDAzNDU4NV5BMl5BanBnXkFtZTgwNjE2NDQ0NzE@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Sofia Helin, Rafael Pettersson",
                "imDbRating": "8.6",
                "imDbRatingCount": "68910"
            },
            {
                "id": "tt4288182",
                "rank": "132",
                "title": "Atlanta",
                "fullTitle": "Atlanta (2016)",
                "year": "2016",
                "image": "https://m.media-amazon.com/images/M/MV5BZGU1MzRhNmMtNDExOS00NTk2LWJlYzMtMzc4YWYyN2Q3M2ZmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UY176_CR6,0,128,176_AL_.jpg",
                "crew": "Donald Glover, Brian Tyree Henry",
                "imDbRating": "8.6",
                "imDbRatingCount": "71789"
            },
            {
                "id": "tt9335498",
                "rank": "133",
                "title": "Demon Slayer: Kimetsu no Yaiba",
                "fullTitle": "Demon Slayer: Kimetsu no Yaiba (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BNzJhMDY2NzUtYzE2Ny00YWVmLWI3YjQtODk2ZWQzYmEwMzJiXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Natsuki Hanae, Zach Aguilar",
                "imDbRating": "8.6",
                "imDbRatingCount": "98956"
            },
            {
                "id": "tt3322312",
                "rank": "134",
                "title": "Daredevil",
                "fullTitle": "Daredevil (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BYTA2OGExMTctYTAxYS00NjM0LTljZjAtYjViZWRiMDdiMGRkXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Charlie Cox, Vincent D'Onofrio",
                "imDbRating": "8.6",
                "imDbRatingCount": "435752"
            },
            {
                "id": "tt10332508",
                "rank": "135",
                "title": "Primal",
                "fullTitle": "Primal (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BYjk3Y2U3NjEtMjNhYi00YTZmLWEzOTgtZWI4N2Y4NzlmNWExXkEyXkFqcGdeQXVyODk2MzQ0OTc@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Aaron LaPlante, Laëtitia Eïdo",
                "imDbRating": "8.6",
                "imDbRatingCount": "14369"
            },
            {
                "id": "tt9140342",
                "rank": "136",
                "title": "It's a Sin",
                "fullTitle": "It's a Sin (2021)",
                "year": "2021",
                "image": "https://m.media-amazon.com/images/M/MV5BZWIyNGI1N2YtNzRlZS00NTFjLTk5MzMtZjQ5MTUwMTljZDZkXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Olly Alexander, Nathaniel Curtis",
                "imDbRating": "8.6",
                "imDbRatingCount": "31260"
            },
            {
                "id": "tt0094517",
                "rank": "137",
                "title": "Mystery Science Theater 3000",
                "fullTitle": "Mystery Science Theater 3000 (1988)",
                "year": "1988",
                "image": "https://m.media-amazon.com/images/M/MV5BNTA0OGRiYTMtMjliYS00ZjZkLWI2ODEtMWI5ZmM5OTBjYmNlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Joel Hodgson, Michael J. Nelson",
                "imDbRating": "8.6",
                "imDbRatingCount": "24679"
            },
            {
                "id": "tt1486217",
                "rank": "138",
                "title": "Archer",
                "fullTitle": "Archer (2009)",
                "year": "2009",
                "image": "https://m.media-amazon.com/images/M/MV5BMTg3NTMwMzY2OF5BMl5BanBnXkFtZTgwMDcxMjQ0NDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "H. Jon Benjamin, Judy Greer",
                "imDbRating": "8.6",
                "imDbRatingCount": "154228"
            },
            {
                "id": "tt1641384",
                "rank": "139",
                "title": "Young Justice",
                "fullTitle": "Young Justice (2010)",
                "year": "2010",
                "image": "https://m.media-amazon.com/images/M/MV5BMTAwYzE4NzItY2Q3Zi00NjRmLWE5ZTAtMDM5OWIyMmQ3MTFlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Nolan North, Danica McKellar",
                "imDbRating": "8.6",
                "imDbRatingCount": "41335"
            },
            {
                "id": "tt2049116",
                "rank": "140",
                "title": "Gomorrah",
                "fullTitle": "Gomorrah (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BMTgzNmNjZGQtMjM3ZC00Y2Y2LTlkZGItM2EwNTM2MmUyMDExXkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Salvatore Esposito, Marco D'Amore",
                "imDbRating": "8.6",
                "imDbRatingCount": "39589"
            },
            {
                "id": "tt8595766",
                "rank": "141",
                "title": "Yeh Meri Family",
                "fullTitle": "Yeh Meri Family (2018)",
                "year": "2018",
                "image": "https://m.media-amazon.com/images/M/MV5BZWMxMjBiZmUtMjM1Yi00ODk4LWE4MjctNmFlYzIzNmE4MmU4XkEyXkFqcGdeQXVyNzEyNTM4MTU@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Vishesh Bansal, Mona Singh",
                "imDbRating": "8.6",
                "imDbRatingCount": "23904"
            },
            {
                "id": "tt0092324",
                "rank": "142",
                "title": "Blackadder the Third",
                "fullTitle": "Blackadder the Third (1987)",
                "year": "1987",
                "image": "https://m.media-amazon.com/images/M/MV5BMGViZTgzNjEtZWQ3My00YjJkLTk2OGUtZDQ1ODg2ZGEyNzhhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Rowan Atkinson, Tony Robinson",
                "imDbRating": "8.6",
                "imDbRatingCount": "44276"
            },
            {
                "id": "tt4834232",
                "rank": "143",
                "title": "Critical Role",
                "fullTitle": "Critical Role (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BYjNjZDliYmItZDE0NC00ZGY3LTk0ZDEtZGI5MjAxZjQwMDE4XkEyXkFqcGdeQXVyMjM5NzU3OTM@._V1_UY176_CR3,0,128,176_AL_.jpg",
                "crew": "Matthew Mercer, Marisha Ray",
                "imDbRating": "8.6",
                "imDbRatingCount": "10690"
            },
            {
                "id": "tt0090509",
                "rank": "144",
                "title": "The Return of Sherlock Holmes",
                "fullTitle": "The Return of Sherlock Holmes (1986)",
                "year": "1986",
                "image": "https://m.media-amazon.com/images/M/MV5BMjM1OTc0MjMtZjFmOS00ZmQ0LTk1ZWItM2U1YTc5ODZjZjI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jeremy Brett, Edward Hardwicke",
                "imDbRating": "8.6",
                "imDbRatingCount": "12268"
            },
            {
                "id": "tt0096639",
                "rank": "145",
                "title": "Lonesome Dove",
                "fullTitle": "Lonesome Dove (1989)",
                "year": "1989",
                "image": "https://m.media-amazon.com/images/M/MV5BMmJmYTg0MDEtN2VjMC00YmUxLWFhNmMtZTBiYjQ2ZGQ5ZWMyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Robert Duvall, Tommy Lee Jones",
                "imDbRating": "8.6",
                "imDbRatingCount": "23284"
            },
            {
                "id": "tt0434706",
                "rank": "146",
                "title": "Monster",
                "fullTitle": "Monster (2004)",
                "year": "2004",
                "image": "https://m.media-amazon.com/images/M/MV5BM2ZkYTAwMGMtOGEwOS00MzBjLTgxOGYtZTYwY2E1ZjMyZmY4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Hidenobu Kiuchi, Liam O'Brien",
                "imDbRating": "8.6",
                "imDbRatingCount": "30319"
            },
            {
                "id": "tt1305826",
                "rank": "147",
                "title": "Adventure Time",
                "fullTitle": "Adventure Time (2010)",
                "year": "2010",
                "image": "https://m.media-amazon.com/images/M/MV5BMGFkNGY4NGMtZjY0NC00YTI0LThiZjMtMjBmZGMzOGU3YTdmXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "John DiMaggio, Jeremy Shada",
                "imDbRating": "8.6",
                "imDbRatingCount": "94334"
            },
            {
                "id": "tt4236770",
                "rank": "148",
                "title": "Yellowstone",
                "fullTitle": "Yellowstone (2018)",
                "year": "2018",
                "image": "https://m.media-amazon.com/images/M/MV5BZjhkNWM1NTQtODI4NS00NzllLTg1ODAtYjg3N2QxZjc3ZjRiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Kevin Costner, Luke Grimes",
                "imDbRating": "8.6",
                "imDbRatingCount": "128391"
            },
            {
                "id": "tt0268093",
                "rank": "149",
                "title": "Ramayan",
                "fullTitle": "Ramayan (1987)",
                "year": "1987",
                "image": "https://m.media-amazon.com/images/M/MV5BODFjYWEyOTktMTU3OC00YTBhLWE4ZmEtNTJiYWUzYTYwMjIzXkEyXkFqcGdeQXVyNjU1NDgwMDg@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Arun Govil, Deepika Chikhalia",
                "imDbRating": "8.5",
                "imDbRatingCount": "20241"
            },
            {
                "id": "tt5290382",
                "rank": "150",
                "title": "Mindhunter",
                "fullTitle": "Mindhunter (2017)",
                "year": "2017",
                "image": "https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jonathan Groff, Holt McCallany",
                "imDbRating": "8.5",
                "imDbRatingCount": "283128"
            },
            {
                "id": "tt3398540",
                "rank": "151",
                "title": "Haikyu!!",
                "fullTitle": "Haikyu!! (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BNjkyNDI2MTgtN2Y3NS00M2RjLWJhNDMtMmNmZmUwMDQwZTE1XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Ayumu Murase, Kaito Ishikawa",
                "imDbRating": "8.5",
                "imDbRatingCount": "24966"
            },
            {
                "id": "tt0380136",
                "rank": "152",
                "title": "QI",
                "fullTitle": "QI (2003)",
                "year": "2003",
                "image": "https://m.media-amazon.com/images/M/MV5BMjgyYWUxNGMtMGMwZi00OWIyLTkwN2ItOWYyYWUxYzcyNzUwXkEyXkFqcGdeQXVyNjg0NTcxMTg@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Alan Davies, Stephen Fry",
                "imDbRating": "8.5",
                "imDbRatingCount": "31849"
            },
            {
                "id": "tt5421602",
                "rank": "153",
                "title": "Anne with an E",
                "fullTitle": "Anne with an E (2017)",
                "year": "2017",
                "image": "https://m.media-amazon.com/images/M/MV5BNThmMzJlNzgtYmY5ZC00MDllLThmZTMtNTRiMjQwNmY0NmRhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY176_CR6,0,128,176_AL_.jpg",
                "crew": "Amybeth McNulty, Geraldine James",
                "imDbRating": "8.5",
                "imDbRatingCount": "54503"
            },
            {
                "id": "tt0096657",
                "rank": "154",
                "title": "Mr. Bean",
                "fullTitle": "Mr. Bean (1990)",
                "year": "1990",
                "image": "https://m.media-amazon.com/images/M/MV5BOGNjZTRlNDctNGI0Yi00YmFkLTljMmQtMjQ1ZjdiNmU5YTc0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Rowan Atkinson, Robin Driscoll",
                "imDbRating": "8.5",
                "imDbRatingCount": "119376"
            },
            {
                "id": "tt5189670",
                "rank": "155",
                "title": "Making a Murderer",
                "fullTitle": "Making a Murderer (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BMTg4Mjc1NjE4Ml5BMl5BanBnXkFtZTgwMjk2NjA1NjM@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Steven Avery, Dolores Avery",
                "imDbRating": "8.5",
                "imDbRatingCount": "95815"
            },
            {
                "id": "tt9174558",
                "rank": "156",
                "title": "Dopesick",
                "fullTitle": "Dopesick (2021)",
                "year": "2021",
                "image": "https://m.media-amazon.com/images/M/MV5BZTc5NmU1YWUtMzgxNC00YmVmLTk1MDYtNjlkNjQwZGVjMTIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Michael Keaton, Peter Sarsgaard",
                "imDbRating": "8.5",
                "imDbRatingCount": "55054"
            },
            {
                "id": "tt0080306",
                "rank": "157",
                "title": "Yes Minister",
                "fullTitle": "Yes Minister (1980)",
                "year": "1980",
                "image": "https://m.media-amazon.com/images/M/MV5BZjlkOGIyOWUtN2I2My00MzFjLTlhYTQtYmRkZjQ3Nzg1MWY4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Paul Eddington, Nigel Hawthorne",
                "imDbRating": "8.5",
                "imDbRatingCount": "14899"
            },
            {
                "id": "tt0094525",
                "rank": "158",
                "title": "Poirot",
                "fullTitle": "Poirot (1989)",
                "year": "1989",
                "image": "https://m.media-amazon.com/images/M/MV5BODljYzNlZTMtMWIwNi00N2QzLWE2ZTAtZDBmYzIwYzhlZDY2XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "David Suchet, Hugh Fraser",
                "imDbRating": "8.5",
                "imDbRatingCount": "45511"
            },
            {
                "id": "tt2244495",
                "rank": "159",
                "title": "The Eric Andre Show",
                "fullTitle": "The Eric Andre Show (2012)",
                "year": "2012",
                "image": "https://m.media-amazon.com/images/M/MV5BZWI4YTVhYmMtZmZjNS00MmFjLTkyMDItNzcxYjVjZjZmODliXkEyXkFqcGdeQXVyMzM4NjcxOTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Eric André, Hannibal Buress",
                "imDbRating": "8.5",
                "imDbRatingCount": "18479"
            },
            {
                "id": "tt1489428",
                "rank": "160",
                "title": "Justified",
                "fullTitle": "Justified (2010)",
                "year": "2010",
                "image": "https://m.media-amazon.com/images/M/MV5BNzRjNGVhNDMtODI0ZS00NGNhLWE2MTctMGRkMzdhZmQ1YWY4XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Timothy Olyphant, Nick Searcy",
                "imDbRating": "8.5",
                "imDbRatingCount": "100215"
            },
            {
                "id": "tt0979432",
                "rank": "161",
                "title": "Boardwalk Empire",
                "fullTitle": "Boardwalk Empire (2010)",
                "year": "2010",
                "image": "https://m.media-amazon.com/images/M/MV5BYTYxNzc5ZmYtODcyNi00ZWUwLWExNWUtY2Y0YTlhZDBlMGU1XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Steve Buscemi, Kelly Macdonald",
                "imDbRating": "8.5",
                "imDbRatingCount": "188802"
            },
            {
                "id": "tt6763664",
                "rank": "162",
                "title": "The Haunting of Hill House",
                "fullTitle": "The Haunting of Hill House (2018)",
                "year": "2018",
                "image": "https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Michiel Huisman, Carla Gugino",
                "imDbRating": "8.5",
                "imDbRatingCount": "238720"
            },
            {
                "id": "tt0053488",
                "rank": "163",
                "title": "The Bugs Bunny Show",
                "fullTitle": "The Bugs Bunny Show (1960)",
                "year": "1960",
                "image": "https://m.media-amazon.com/images/M/MV5BMzczMzM3M2EtY2E1MS00ZjA2LTg0ZjctOWNjZWMxN2NkYzFkXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Mel Blanc, Pinto Colvig",
                "imDbRating": "8.5",
                "imDbRatingCount": "33842"
            },
            {
                "id": "tt1870479",
                "rank": "164",
                "title": "The Newsroom",
                "fullTitle": "The Newsroom (2012)",
                "year": "2012",
                "image": "https://m.media-amazon.com/images/M/MV5BZDI0OWIwMTgtZGIyOC00ODRhLWIwNjAtOWViZmMwOWYwOGViXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jeff Daniels, Emily Mortimer",
                "imDbRating": "8.5",
                "imDbRatingCount": "115748"
            },
            {
                "id": "tt8289930",
                "rank": "165",
                "title": "Formula 1: Drive to Survive",
                "fullTitle": "Formula 1: Drive to Survive (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BMzVkMGU0YWMtOWQxMC00MjFhLTg1NjAtMDFlZTZlYzJlMjlhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Will Buxton, Jack Nicholls",
                "imDbRating": "8.5",
                "imDbRatingCount": "39888"
            },
            {
                "id": "tt10048342",
                "rank": "166",
                "title": "The Queen's Gambit",
                "fullTitle": "The Queen's Gambit (2020)",
                "year": "2020",
                "image": "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Anya Taylor-Joy, Chloe Pirrie",
                "imDbRating": "8.5",
                "imDbRatingCount": "435581"
            },
            {
                "id": "tt2100976",
                "rank": "167",
                "title": "Impractical Jokers",
                "fullTitle": "Impractical Jokers (2011)",
                "year": "2011",
                "image": "https://m.media-amazon.com/images/M/MV5BZjhlYTllNzgtOTQ5Ni00MTI1LWJmZjktOTc2NTZkYWVlYjllXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "James Murray, Brian Quinn",
                "imDbRating": "8.5",
                "imDbRatingCount": "40427"
            },
            {
                "id": "tt0863046",
                "rank": "168",
                "title": "Flight of the Conchords",
                "fullTitle": "Flight of the Conchords (2007)",
                "year": "2007",
                "image": "https://m.media-amazon.com/images/M/MV5BNTM4M2VhY2UtZTJmMi00YmFjLTk4OWItMzU2ZDA3NTUxZjYxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Jemaine Clement, Bret McKenzie",
                "imDbRating": "8.5",
                "imDbRatingCount": "61336"
            },
            {
                "id": "tt7562112",
                "rank": "169",
                "title": "Pose",
                "fullTitle": "Pose (2018)",
                "year": "2018",
                "image": "https://m.media-amazon.com/images/M/MV5BMjQ2ZDMzNmMtZWZmZC00MTFjLWFiMTMtNzJjY2Q3ZjQ3MmI0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Michaela Jaé (MJ) Rodriguez, Dominique Jackson",
                "imDbRating": "8.5",
                "imDbRatingCount": "29157"
            },
            {
                "id": "tt0088509",
                "rank": "170",
                "title": "Dragon Ball",
                "fullTitle": "Dragon Ball (1986)",
                "year": "1986",
                "image": "https://m.media-amazon.com/images/M/MV5BYzI0YjYxY2UtNzRjNS00NTZiLTgzMDItNGEzMjU5MmE0ZWJmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Masako Nozawa, Jôji Yanami",
                "imDbRating": "8.5",
                "imDbRatingCount": "57536"
            },
            {
                "id": "tt0275137",
                "rank": "171",
                "title": "Justice League",
                "fullTitle": "Justice League (2001)",
                "year": "2001",
                "image": "https://m.media-amazon.com/images/M/MV5BMDE2ODk0ZTctMGI4Ni00ODgwLTk4OTAtOGNiNjZkMzI3NTY0XkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Carl Lumbly, Phil LaMarr",
                "imDbRating": "8.5",
                "imDbRatingCount": "46601"
            },
            {
                "id": "tt0280249",
                "rank": "172",
                "title": "Dragon Ball",
                "fullTitle": "Dragon Ball (1995)",
                "year": "1995",
                "image": "https://m.media-amazon.com/images/M/MV5BNDYyNTJkNmItYjgxNC00ODliLTg2MGMtZjkxNjEwYzdjNjUxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY176_CR6,0,128,176_AL_.jpg",
                "crew": "Brice Armstrong, Steve Olson",
                "imDbRating": "8.5",
                "imDbRatingCount": "59994"
            },
            {
                "id": "tt0417373",
                "rank": "173",
                "title": "The Venture Bros.",
                "fullTitle": "The Venture Bros. (2003)",
                "year": "2003",
                "image": "https://m.media-amazon.com/images/M/MV5BNjYwZjJhZDgtMDc2Mi00Y2U4LThjMzItZmYyZDYzZDNjMDI5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Christopher McCulloch, James Urbaniak",
                "imDbRating": "8.5",
                "imDbRatingCount": "26006"
            },
            {
                "id": "tt10850932",
                "rank": "174",
                "title": "Crash Landing on You",
                "fullTitle": "Crash Landing on You (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BMzRiZWUyN2YtNDI4YS00NTg2LTg0OTgtMGI2ZjU4ODQ4Yjk3XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Hyun Bin, Son Ye-jin",
                "imDbRating": "8.5",
                "imDbRatingCount": "28413"
            },
            {
                "id": "tt0237123",
                "rank": "175",
                "title": "Coupling",
                "fullTitle": "Coupling (2000)",
                "year": "2000",
                "image": "https://m.media-amazon.com/images/M/MV5BMTQzMDk1ODI2M15BMl5BanBnXkFtZTYwNjMyNDk4._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jack Davenport, Gina Bellman",
                "imDbRating": "8.5",
                "imDbRatingCount": "45701"
            },
            {
                "id": "tt0187664",
                "rank": "176",
                "title": "Spaced",
                "fullTitle": "Spaced (1999)",
                "year": "1999",
                "image": "https://m.media-amazon.com/images/M/MV5BMmNjODUxNzctOWU2Zi00ZGU3LWI2MDEtMjZjNjE2MmJiMDZiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Simon Pegg, Jessica Hynes",
                "imDbRating": "8.5",
                "imDbRatingCount": "54734"
            },
            {
                "id": "tt0106028",
                "rank": "177",
                "title": "Homicide: Life on the Street",
                "fullTitle": "Homicide: Life on the Street (1993)",
                "year": "1993",
                "image": "https://m.media-amazon.com/images/M/MV5BYTVmZTRhNWItNmQ3Yi00MzNiLWJiZTctOWMyOWRlMDY4YWMyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Richard Belzer, Clark Johnson",
                "imDbRating": "8.5",
                "imDbRatingCount": "12842"
            },
            {
                "id": "tt0314979",
                "rank": "178",
                "title": "Battlestar Galactica",
                "fullTitle": "Battlestar Galactica (2003)",
                "year": "2003",
                "image": "https://m.media-amazon.com/images/M/MV5BZjJlYzgzOWUtZmJlZi00ZGM4LTliNzctNWFkNThlMDJhZDQxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Edward James Olmos, Mary McDonnell",
                "imDbRating": "8.5",
                "imDbRatingCount": "75456"
            },
            {
                "id": "tt13111040",
                "rank": "179",
                "title": "The Offer",
                "fullTitle": "The Offer (2022)",
                "year": "2022",
                "image": "https://m.media-amazon.com/images/M/MV5BMzU1YWU3ZWItYTA4Yy00M2Q0LTkzZTQtYzFmNzVlZTg1ZTQwXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Miles Teller, Matthew Goode",
                "imDbRating": "8.5",
                "imDbRatingCount": "21887"
            },
            {
                "id": "tt0403778",
                "rank": "180",
                "title": "Long Way Round",
                "fullTitle": "Long Way Round (2004)",
                "year": "2004",
                "image": "https://m.media-amazon.com/images/M/MV5BYTAxNWFmMTktMDVjNC00YWFkLTg2NDQtNjQwODZlYmQ2YTA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Ewan McGregor, Charley Boorman",
                "imDbRating": "8.5",
                "imDbRatingCount": "14194"
            },
            {
                "id": "tt4063800",
                "rank": "181",
                "title": "The Bureau",
                "fullTitle": "The Bureau (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BOGRmMDEwOWUtNGI0Ny00YWY3LTkxNmEtZTkwN2FjMjU1YzgwXkEyXkFqcGdeQXVyNTk0MTE2NzU@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Mathieu Kassovitz, Florence Loiret Caille",
                "imDbRating": "8.5",
                "imDbRatingCount": "11696"
            },
            {
                "id": "tt6108262",
                "rank": "182",
                "title": "Black Sun",
                "fullTitle": "Black Sun (2017)",
                "year": "2017",
                "image": "https://m.media-amazon.com/images/M/MV5BYjAzMzc3OTMtZTAzNi00OWI0LWJmOGEtYjI3MWZmY2IzNDkxXkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Andrija Kuzmanovic, Marija Bergam",
                "imDbRating": "8.5",
                "imDbRatingCount": "11470"
            },
            {
                "id": "tt9544034",
                "rank": "183",
                "title": "The Family Man",
                "fullTitle": "The Family Man (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_UY176_CR6,0,128,176_AL_.jpg",
                "crew": "Manoj Bajpayee, Samantha Ruth Prabhu",
                "imDbRating": "8.5",
                "imDbRatingCount": "86562"
            },
            {
                "id": "tt7908628",
                "rank": "184",
                "title": "What We Do in the Shadows",
                "fullTitle": "What We Do in the Shadows (2019)",
                "year": "2019",
                "image": "https://m.media-amazon.com/images/M/MV5BNWYwNGMwNTItMzZiNS00YTNhLTg5ZDItOTE5YzdhYWRjOWQ2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Kayvan Novak, Matt Berry",
                "imDbRating": "8.5",
                "imDbRatingCount": "75710"
            },
            {
                "id": "tt0086831",
                "rank": "185",
                "title": "Yes, Prime Minister",
                "fullTitle": "Yes, Prime Minister (1986)",
                "year": "1986",
                "image": "https://m.media-amazon.com/images/M/MV5BZDAyOTQ5YWUtNjNiZS00NmJiLTljNDItMzU2YWNjMjk4MTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Paul Eddington, Nigel Hawthorne",
                "imDbRating": "8.5",
                "imDbRatingCount": "11602"
            },
            {
                "id": "tt0423731",
                "rank": "186",
                "title": "Samurai Champloo",
                "fullTitle": "Samurai Champloo (2004)",
                "year": "2004",
                "image": "https://m.media-amazon.com/images/M/MV5BMzg1NmFlMzctYmVkNC00Y2M4LTgyOGQtNjkyYWFkZDQ4MGJjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Kazuya Nakai, Ginpei Sato",
                "imDbRating": "8.5",
                "imDbRatingCount": "48596"
            },
            {
                "id": "tt0475784",
                "rank": "187",
                "title": "Westworld",
                "fullTitle": "Westworld (2016)",
                "year": "2016",
                "image": "https://m.media-amazon.com/images/M/MV5BZDg1OWRiMTktZDdiNy00NTZlLTg2Y2EtNWRiMTcxMGE5YTUxXkEyXkFqcGdeQXVyMTM2MDY0OTYx._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Evan Rachel Wood, Jeffrey Wright",
                "imDbRating": "8.5",
                "imDbRatingCount": "499865"
            },
            {
                "id": "tt0487831",
                "rank": "188",
                "title": "The IT Crowd",
                "fullTitle": "The IT Crowd (2006)",
                "year": "2006",
                "image": "https://m.media-amazon.com/images/M/MV5BMjE5MThjMzAtNWVmNC00YThkLTlmNzktMTM3Yzk4YTZhMTgwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Chris O'Dowd, Richard Ayoade",
                "imDbRating": "8.5",
                "imDbRatingCount": "151617"
            },
            {
                "id": "tt1492966",
                "rank": "189",
                "title": "Louie",
                "fullTitle": "Louie (2010)",
                "year": "2010",
                "image": "https://m.media-amazon.com/images/M/MV5BOGI0ZjA5ZmUtMTY1ZC00NjZjLTk0MGEtNmQ2YTczY2Q3YTc0XkEyXkFqcGdeQXVyNDA5NTgxNjU@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Louis C.K., Hadley Delany",
                "imDbRating": "8.5",
                "imDbRatingCount": "78984"
            },
            {
                "id": "tt0129690",
                "rank": "190",
                "title": "I'm Alan Partridge",
                "fullTitle": "I'm Alan Partridge (1997)",
                "year": "1997",
                "image": "https://m.media-amazon.com/images/M/MV5BODRmYzYzZjItMzNmYy00NGE5LTk0MjctYWJkOGNlOWM2MWM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Steve Coogan, Simon Greenall",
                "imDbRating": "8.5",
                "imDbRatingCount": "20651"
            },
            {
                "id": "tt0290978",
                "rank": "191",
                "title": "The Office",
                "fullTitle": "The Office (2001)",
                "year": "2001",
                "image": "https://m.media-amazon.com/images/M/MV5BYWI2YmI2ZmMtMTZjMC00MzMzLWI5ODItNDY1OTg3YjNmZmUxXkEyXkFqcGdeQXVyNDA5NTgxNjU@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Ricky Gervais, Martin Freeman",
                "imDbRating": "8.5",
                "imDbRatingCount": "112715"
            },
            {
                "id": "tt4158110",
                "rank": "192",
                "title": "Mr. Robot",
                "fullTitle": "Mr. Robot (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BM2QyNDIzOGMtNThhNS00NmUwLWI0ZjUtZjdkN2I1OTRjZWQ3XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Rami Malek, Christian Slater",
                "imDbRating": "8.5",
                "imDbRatingCount": "384421"
            },
            {
                "id": "tt1513168",
                "rank": "193",
                "title": "Through the Wormhole",
                "fullTitle": "Through the Wormhole (2010)",
                "year": "2010",
                "image": "https://m.media-amazon.com/images/M/MV5BMDhkMTY2NGQtMWY4Mi00ZjhmLWIzNGYtZDJhODkwNTM5NTIzXkEyXkFqcGdeQXVyNDk3NDEzMzk@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Morgan Freeman, Sean Carroll",
                "imDbRating": "8.5",
                "imDbRatingCount": "17821"
            },
            {
                "id": "tt4647692",
                "rank": "194",
                "title": "Letterkenny",
                "fullTitle": "Letterkenny (2016)",
                "year": "2016",
                "image": "https://m.media-amazon.com/images/M/MV5BMzRjOWYyNDUtYTJhMC00ZmZmLThlYmYtOWJkMzk4MGQ2NDFhXkEyXkFqcGdeQXVyMjQyMDc5MA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Jared Keeso, Nathan Dales",
                "imDbRating": "8.5",
                "imDbRatingCount": "22830"
            },
            {
                "id": "tt0163507",
                "rank": "195",
                "title": "Whose Line Is It Anyway?",
                "fullTitle": "Whose Line Is It Anyway? (1998)",
                "year": "1998",
                "image": "https://m.media-amazon.com/images/M/MV5BYmJjMTVhYjQtMjBmMC00NWYxLTk2YmEtYWIxZDUzYjljZTYxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Drew Carey, Colin Mochrie",
                "imDbRating": "8.5",
                "imDbRatingCount": "43710"
            },
            {
                "id": "tt1586680",
                "rank": "196",
                "title": "Shameless",
                "fullTitle": "Shameless (2011)",
                "year": "2011",
                "image": "https://m.media-amazon.com/images/M/MV5BZDgxNjQ2MjMtMjk2Yi00M2Q2LWI0ZDktOGM1NWI5YWUzMjk4XkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Emmy Rossum, William H. Macy",
                "imDbRating": "8.5",
                "imDbRatingCount": "240435"
            },
            {
                "id": "tt20869502",
                "rank": "197",
                "title": "Extraordinary Attorney Woo",
                "fullTitle": "Extraordinary Attorney Woo (2022)",
                "year": "2022",
                "image": "https://m.media-amazon.com/images/M/MV5BMTAzNzlhYjItN2MxZS00ZTg4LWFmZGQtN2I1ZWE5YjgzODY3XkEyXkFqcGdeQXVyNjk1NzU1Mjk@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Park Eun-bin, Kang Tae-oh",
                "imDbRating": "8.5",
                "imDbRatingCount": "10618"
            },
            {
                "id": "tt0278238",
                "rank": "198",
                "title": "Samurai Jack",
                "fullTitle": "Samurai Jack (2001)",
                "year": "2001",
                "image": "https://m.media-amazon.com/images/M/MV5BNDcyYjlkM2QtOWIzZC00ZTcwLTlmOGQtMDY2MmIxNzNiOTQ4XkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Phil LaMarr, Mako",
                "imDbRating": "8.5",
                "imDbRatingCount": "53506"
            },
            {
                "id": "tt1442449",
                "rank": "199",
                "title": "Spartacus",
                "fullTitle": "Spartacus (2010)",
                "year": "2010",
                "image": "https://m.media-amazon.com/images/M/MV5BZWQ4MjA2YzEtOTQzYi00NWQ1LWI0ZDEtN2VkZjhmYTc3MzU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Andy Whitfield, Lucy Lawless",
                "imDbRating": "8.5",
                "imDbRatingCount": "241532"
            },
            {
                "id": "tt0118273",
                "rank": "200",
                "title": "Brass Eye",
                "fullTitle": "Brass Eye (1997)",
                "year": "1997",
                "image": "https://m.media-amazon.com/images/M/MV5BOGRjYzI3OGEtZDFmNi00OWQxLWFjODgtZDUyNWMxYjI4MjA5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Christopher Morris, Mark Heap",
                "imDbRating": "8.5",
                "imDbRatingCount": "10815"
            },
            {
                "id": "tt11198330",
                "rank": "201",
                "title": "House of the Dragon",
                "fullTitle": "House of the Dragon (2022)",
                "year": "2022",
                "image": "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Matt Smith, Paddy Considine",
                "imDbRating": "8.5",
                "imDbRatingCount": "165621"
            },
            {
                "id": "tt5288312",
                "rank": "202",
                "title": "Skam",
                "fullTitle": "Skam (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BMzc5NmE5ZDItZGQxZC00ZTdhLThlYzktYjE0NWIyZDM3OGRlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Josefine Frida Pettersen, Iman Meskini",
                "imDbRating": "8.5",
                "imDbRatingCount": "34206"
            },
            {
                "id": "tt1534360",
                "rank": "203",
                "title": "Ezel",
                "fullTitle": "Ezel (2009)",
                "year": "2009",
                "image": "https://m.media-amazon.com/images/M/MV5BMjIzOTY1YTYtNmRhMC00MzAxLWEzMzUtM2ZiMmYwNTY0MjMyXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Kenan Imirzalioglu, Cansu Dere",
                "imDbRating": "8.5",
                "imDbRatingCount": "32812"
            },
            {
                "id": "tt0436992",
                "rank": "204",
                "title": "Doctor Who",
                "fullTitle": "Doctor Who (2005)",
                "year": "2005",
                "image": "https://m.media-amazon.com/images/M/MV5BZWJhYjFmZDEtNTVlYy00NGExLWJhZWItNTAxODY5YTc3MDFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Jodie Whittaker, Peter Capaldi",
                "imDbRating": "8.5",
                "imDbRatingCount": "222961"
            },
            {
                "id": "tt0417349",
                "rank": "205",
                "title": "North & South",
                "fullTitle": "North & South (2004)",
                "year": "2004",
                "image": "https://m.media-amazon.com/images/M/MV5BYjU4NGI4MjQtOTJlZC00Y2UxLWFiMDAtODJhZDFmYmVjMTY3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Daniela Denby-Ashe, Richard Armitage",
                "imDbRating": "8.5",
                "imDbRatingCount": "32717"
            },
            {
                "id": "tt0421357",
                "rank": "206",
                "title": "Fullmetal Alchemist",
                "fullTitle": "Fullmetal Alchemist (2003)",
                "year": "2003",
                "image": "https://m.media-amazon.com/images/M/MV5BMmI5NmFlZjItOTBhOC00NGI0LWIyNDAtODJhOTJjZDEyMTYyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Vic Mignogna, Aaron Dismuke",
                "imDbRating": "8.5",
                "imDbRatingCount": "70731"
            },
            {
                "id": "tt1124373",
                "rank": "207",
                "title": "Sons of Anarchy",
                "fullTitle": "Sons of Anarchy (2008)",
                "year": "2008",
                "image": "https://m.media-amazon.com/images/M/MV5BYTMxMGY1OGQtZmUzNy00NjhmLTlhNzItZDBiNzhlMTgwZjZlXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Charlie Hunnam, Katey Sagal",
                "imDbRating": "8.5",
                "imDbRatingCount": "295366"
            },
            {
                "id": "tt0112159",
                "rank": "208",
                "title": "Neon Genesis Evangelion",
                "fullTitle": "Neon Genesis Evangelion (1995)",
                "year": "1995",
                "image": "https://m.media-amazon.com/images/M/MV5BODZkZjUxNmEtMGEyOS00ZDY5LTkxZDMtZTJkZDBiZTkyOWRkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Megumi Ogata, Megumi Hayashibara",
                "imDbRating": "8.5",
                "imDbRatingCount": "69016"
            },
            {
                "id": "tt12343534",
                "rank": "209",
                "title": "Jujutsu Kaisen",
                "fullTitle": "Jujutsu Kaisen (2020)",
                "year": "2020",
                "image": "https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Junya Enoki, Adam McArthur",
                "imDbRating": "8.5",
                "imDbRatingCount": "57909"
            },
            {
                "id": "tt0290988",
                "rank": "210",
                "title": "Trailer Park Boys",
                "fullTitle": "Trailer Park Boys (2001)",
                "year": "2001",
                "image": "https://m.media-amazon.com/images/M/MV5BOTA0NTAwMTc1MF5BMl5BanBnXkFtZTgwODk2NjY0ODE@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "John Paul Tremblay, Robb Wells",
                "imDbRating": "8.5",
                "imDbRatingCount": "43809"
            },
            {
                "id": "tt2575988",
                "rank": "211",
                "title": "Silicon Valley",
                "fullTitle": "Silicon Valley (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BM2Q5YjNjZWMtYThmYy00N2ZjLWE2NDctNmZjMmZjYWE2NjEwXkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Thomas Middleditch, T.J. Miller",
                "imDbRating": "8.5",
                "imDbRatingCount": "148755"
            },
            {
                "id": "tt2701582",
                "rank": "212",
                "title": "Endeavour",
                "fullTitle": "Endeavour (2012)",
                "year": "2012",
                "image": "https://m.media-amazon.com/images/M/MV5BYjRkZTRkNDUtMTliMC00MjAzLTg4MDUtNjBmODYxMmFkZGU3XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Shaun Evans, Roger Allam",
                "imDbRating": "8.5",
                "imDbRatingCount": "26278"
            },
            {
                "id": "tt4082744",
                "rank": "213",
                "title": "Detectorists",
                "fullTitle": "Detectorists (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BZGUyOWJiYTUtN2E0Ni00MGUwLTk4ZjktYzc3ZmRkNzVlNTU0XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Mackenzie Crook, Toby Jones",
                "imDbRating": "8.5",
                "imDbRatingCount": "14632"
            },
            {
                "id": "tt4093826",
                "rank": "214",
                "title": "Twin Peaks",
                "fullTitle": "Twin Peaks (2017)",
                "year": "2017",
                "image": "https://m.media-amazon.com/images/M/MV5BZWZiNWI0MzgtMDMyYS00NDY2LWI0Y2YtNTQ2ZWJhNzU2NTEyXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Kyle MacLachlan, Sheryl Lee",
                "imDbRating": "8.5",
                "imDbRatingCount": "67450"
            },
            {
                "id": "tt0120570",
                "rank": "215",
                "title": "From the Earth to the Moon",
                "fullTitle": "From the Earth to the Moon (1998)",
                "year": "1998",
                "image": "https://m.media-amazon.com/images/M/MV5BOWIzMjU1OTQtY2QwNC00YTUwLTg2NmUtYzg2ZDQ3YTkzNzA4XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Tom Hanks, Nick Searcy",
                "imDbRating": "8.5",
                "imDbRatingCount": "12305"
            },
            {
                "id": "tt1758429",
                "rank": "216",
                "title": "Spartacus: Gods of the Arena",
                "fullTitle": "Spartacus: Gods of the Arena (2011)",
                "year": "2011",
                "image": "https://m.media-amazon.com/images/M/MV5BMTYyMjI4NzYxOF5BMl5BanBnXkFtZTcwNTUwMTc1NA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "John Hannah, Manu Bennett",
                "imDbRating": "8.5",
                "imDbRatingCount": "137589"
            },
            {
                "id": "tt0203082",
                "rank": "217",
                "title": "Rurouni Kenshin: Trust and Betrayal",
                "fullTitle": "Rurouni Kenshin: Trust and Betrayal (1999)",
                "year": "1999",
                "image": "https://m.media-amazon.com/images/M/MV5BNWI3MTAxOWYtYjNhYi00N2QwLWIxNDMtOGYzZGE4ZmUzOWE3XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Mayo Suzukaze, Junko Iwao",
                "imDbRating": "8.5",
                "imDbRatingCount": "14869"
            },
            {
                "id": "tt5897304",
                "rank": "218",
                "title": "Mob Psycho 100",
                "fullTitle": "Mob Psycho 100 (2016)",
                "year": "2016",
                "image": "https://m.media-amazon.com/images/M/MV5BYWIwZjhkMzgtOWExYi00ZGIwLTg1ZTktNjQyZWIxYWFmZTc0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Setsuo Ito, Takahiro Sakurai",
                "imDbRating": "8.5",
                "imDbRatingCount": "30519"
            },
            {
                "id": "tt7221388",
                "rank": "219",
                "title": "Cobra Kai",
                "fullTitle": "Cobra Kai (2018)",
                "year": "2018",
                "image": "https://m.media-amazon.com/images/M/MV5BYWU4ZmI0NTItZjcyNy00MzQ5LThiNDQtZDZkNjg1NWUwN2RhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Ralph Macchio, William Zabka",
                "imDbRating": "8.5",
                "imDbRatingCount": "181139"
            },
            {
                "id": "tt0149460",
                "rank": "220",
                "title": "Futurama",
                "fullTitle": "Futurama (1999)",
                "year": "1999",
                "image": "https://m.media-amazon.com/images/M/MV5BNzA2ZDk2ZTUtMWU2Yi00NDVmLTk1ODEtMmFmMjQyNWYzODI0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Billy West, John DiMaggio",
                "imDbRating": "8.5",
                "imDbRatingCount": "236471"
            },
            {
                "id": "tt4269716",
                "rank": "221",
                "title": "Umbre",
                "fullTitle": "Umbre (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BZjIyNWRlNTEtZDFmOC00YjJkLWJiNDktNWQzMmI1MmQyMDMyXkEyXkFqcGdeQXVyMzQ4MjE5ODk@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Serban Pavlu, Maria Obretin",
                "imDbRating": "8.5",
                "imDbRatingCount": "10244"
            },
            {
                "id": "tt2243973",
                "rank": "222",
                "title": "Hannibal",
                "fullTitle": "Hannibal (2013)",
                "year": "2013",
                "image": "https://m.media-amazon.com/images/M/MV5BNWU5YmJhNWEtZGVlOS00NmRhLThmNzUtYjAyMDA2MDg5ZTM4XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Hugh Dancy, Mads Mikkelsen",
                "imDbRating": "8.5",
                "imDbRatingCount": "253802"
            },
            {
                "id": "tt1439629",
                "rank": "223",
                "title": "Community",
                "fullTitle": "Community (2009)",
                "year": "2009",
                "image": "https://m.media-amazon.com/images/M/MV5BNDQ5NDZiYjktZmFmMy00MjAxLTk1MDktOGZjYTY5YTE1ODdmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Joel McHale, Danny Pudi",
                "imDbRating": "8.4",
                "imDbRatingCount": "262086"
            },
            {
                "id": "tt3526078",
                "rank": "224",
                "title": "Schitt's Creek",
                "fullTitle": "Schitt's Creek (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Eugene Levy, Catherine O'Hara",
                "imDbRating": "8.4",
                "imDbRatingCount": "119383"
            },
            {
                "id": "tt3230854",
                "rank": "225",
                "title": "The Expanse",
                "fullTitle": "The Expanse (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BZDVmMDljM2QtZDkzZC00ZDg2LWFiMGItZjNiNjliZjg2MGEzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Steven Strait, Dominique Tipper",
                "imDbRating": "8.4",
                "imDbRatingCount": "152135"
            },
            {
                "id": "tt4295140",
                "rank": "226",
                "title": "Chef's Table",
                "fullTitle": "Chef's Table (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BMjE3MDQ2OTYyN15BMl5BanBnXkFtZTgwNjQ0Nzg0NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Massimo Bottura, Ruth Reichl",
                "imDbRating": "8.4",
                "imDbRatingCount": "15614"
            },
            {
                "id": "tt1230180",
                "rank": "227",
                "title": "The Angry Video Game Nerd",
                "fullTitle": "The Angry Video Game Nerd (2004)",
                "year": "2004",
                "image": "https://m.media-amazon.com/images/M/MV5BYzExNjRkZmItYzFlNi00ZWI5LWE2MTEtNTcyZDQ1Y2QyZjBiXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "James Rolfe, Mike Matei",
                "imDbRating": "8.4",
                "imDbRatingCount": "15198"
            },
            {
                "id": "tt0995832",
                "rank": "228",
                "title": "Generation Kill",
                "fullTitle": "Generation Kill (2008)",
                "year": "2008",
                "image": "https://m.media-amazon.com/images/M/MV5BMTM2NjAxOTQzNl5BMl5BanBnXkFtZTcwMjk4NzU3MQ@@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Alexander Skarsgård, James Ransone",
                "imDbRating": "8.4",
                "imDbRatingCount": "53809"
            },
            {
                "id": "tt1710308",
                "rank": "229",
                "title": "Regular Show",
                "fullTitle": "Regular Show (2009)",
                "year": "2009",
                "image": "https://m.media-amazon.com/images/M/MV5BNWJjZjQ5NWUtMTkwZC00NGY2LWEyMDEtMGIyZThkMmMyZTZlXkEyXkFqcGdeQXVyMTI2MzY3NTA3._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "J.G. Quintel, William Salyers",
                "imDbRating": "8.4",
                "imDbRatingCount": "44704"
            },
            {
                "id": "tt2401256",
                "rank": "230",
                "title": "The Night Of",
                "fullTitle": "The Night Of (2016)",
                "year": "2016",
                "image": "https://m.media-amazon.com/images/M/MV5BMjQyOTgxMDI0Nl5BMl5BanBnXkFtZTgwOTE4MzczOTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Riz Ahmed, John Turturro",
                "imDbRating": "8.4",
                "imDbRatingCount": "149976"
            },
            {
                "id": "tt7472896",
                "rank": "231",
                "title": "Mr Inbetween",
                "fullTitle": "Mr Inbetween (2018)",
                "year": "2018",
                "image": "https://m.media-amazon.com/images/M/MV5BNWU4MTA0ZTItZmUyYi00ZGY3LWE2NTYtMDQ3N2RkZjcwYjk4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Scott Ryan, Chika Yasumura",
                "imDbRating": "8.4",
                "imDbRatingCount": "17940"
            },
            {
                "id": "tt0047708",
                "rank": "232",
                "title": "Alfred Hitchcock Presents",
                "fullTitle": "Alfred Hitchcock Presents (1955)",
                "year": "1955",
                "image": "https://m.media-amazon.com/images/M/MV5BOWQ1OGI0ZTItOTNkYi00NWFhLWE3ZWYtODVmMjkzMmM1NDYwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Alfred Hitchcock, Harry Tyler",
                "imDbRating": "8.4",
                "imDbRatingCount": "17425"
            },
            {
                "id": "tt7278862",
                "rank": "233",
                "title": "My Brilliant Friend",
                "fullTitle": "My Brilliant Friend (2018)",
                "year": "2018",
                "image": "https://m.media-amazon.com/images/M/MV5BODU3Nzg5NGMtOTE2MS00YWQ0LTgyYzktMWM3YjNmYjlmZTliXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Alba Rohrwacher, Margherita Mazzucco",
                "imDbRating": "8.4",
                "imDbRatingCount": "15033"
            },
            {
                "id": "tt2433738",
                "rank": "234",
                "title": "Wentworth",
                "fullTitle": "Wentworth (2013)",
                "year": "2013",
                "image": "https://m.media-amazon.com/images/M/MV5BZDZlYTIxOWQtZDY3OS00MTY2LThmMmYtM2YwMjI5YTRmNmI0XkEyXkFqcGdeQXVyOTE1ODYyNDA@._V1_UY176_CR8,0,128,176_AL_.jpg",
                "crew": "Kate Atkinson, Katrina Milosevic",
                "imDbRating": "8.4",
                "imDbRatingCount": "22341"
            },
            {
                "id": "tt3920596",
                "rank": "235",
                "title": "Big Little Lies",
                "fullTitle": "Big Little Lies (2017)",
                "year": "2017",
                "image": "https://m.media-amazon.com/images/M/MV5BNDc2MDE3NzkyNF5BMl5BanBnXkFtZTgwOTI0ODAxMTI@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Reese Witherspoon, Nicole Kidman",
                "imDbRating": "8.4",
                "imDbRatingCount": "196616"
            },
            {
                "id": "tt3895150",
                "rank": "236",
                "title": "Your Lie in April",
                "fullTitle": "Your Lie in April (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BYThlNWY5ZDgtYTIxNC00ZjdiLWJmNGUtMDFjMDlmZTAzOWFiXkEyXkFqcGdeQXVyNTM4NzAzNjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Natsuki Hanae, Risa Taneda",
                "imDbRating": "8.4",
                "imDbRatingCount": "29161"
            },
            {
                "id": "tt6111552",
                "rank": "237",
                "title": "Content Cop",
                "fullTitle": "Content Cop (2015)",
                "year": "2015",
                "image": "https://m.media-amazon.com/images/M/MV5BYzM5MjczMDAtODI1YS00MjAzLWE3ZTAtMjE2YTdhYWQ5MzU0XkEyXkFqcGdeQXVyNjI1ODIwNTc@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Ian Washburn, Calvin Vail",
                "imDbRating": "8.4",
                "imDbRatingCount": "12631"
            },
            {
                "id": "tt2937900",
                "rank": "238",
                "title": "The Knick",
                "fullTitle": "The Knick (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BMTQ5NzcyNDc5MV5BMl5BanBnXkFtZTgwMDMyOTY5NjE@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "André Holland, Clive Owen",
                "imDbRating": "8.4",
                "imDbRatingCount": "48724"
            },
            {
                "id": "tt1299368",
                "rank": "239",
                "title": "Southland",
                "fullTitle": "Southland (2009)",
                "year": "2009",
                "image": "https://m.media-amazon.com/images/M/MV5BMjAwNzQ4MTMyMF5BMl5BanBnXkFtZTcwMDk3NTYyNw@@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Michael Cudlitz, Shawn Hatosy",
                "imDbRating": "8.4",
                "imDbRatingCount": "26782"
            },
            {
                "id": "tt7259746",
                "rank": "240",
                "title": "Queer Eye",
                "fullTitle": "Queer Eye (2018)",
                "year": "2018",
                "image": "https://m.media-amazon.com/images/M/MV5BMDYwNzgxYzUtNGY4My00MTI2LTlmNTUtYWY1NDAyNWQyMzEwXkEyXkFqcGdeQXVyOTYyMTY2NzQ@._V1_UY176_CR6,0,128,176_AL_.jpg",
                "crew": "Jonathan Van Ness, Antoni Porowski",
                "imDbRating": "8.4",
                "imDbRatingCount": "18999"
            },
            {
                "id": "tt0262150",
                "rank": "241",
                "title": "Black Books",
                "fullTitle": "Black Books (2000)",
                "year": "2000",
                "image": "https://m.media-amazon.com/images/M/MV5BODZjOGMxMGUtYTY3YS00NjcxLWFkY2EtYzc3NDVkZjk0YWY2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Dylan Moran, Bill Bailey",
                "imDbRating": "8.4",
                "imDbRatingCount": "58858"
            },
            {
                "id": "tt0421291",
                "rank": "242",
                "title": "Avrupa Yakasi",
                "fullTitle": "Avrupa Yakasi (2004)",
                "year": "2004",
                "image": "https://m.media-amazon.com/images/M/MV5BZDEzNzk4YmQtYWRhMi00ZGRmLTg2M2YtZjM2YTY0MWE1YWYwXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Gülse Birsel, Levent Üzümcü",
                "imDbRating": "8.4",
                "imDbRatingCount": "18840"
            },
            {
                "id": "tt0472027",
                "rank": "243",
                "title": "John Adams",
                "fullTitle": "John Adams (2008)",
                "year": "2008",
                "image": "https://m.media-amazon.com/images/M/MV5BMTQwNDc0MDE2MF5BMl5BanBnXkFtZTcwODYwNjE2MQ@@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Paul Giamatti, Laura Linney",
                "imDbRating": "8.4",
                "imDbRatingCount": "33276"
            },
            {
                "id": "tt0103584",
                "rank": "244",
                "title": "X-Men: The Animated Series",
                "fullTitle": "X-Men: The Animated Series (1992)",
                "year": "1992",
                "image": "https://m.media-amazon.com/images/M/MV5BNTVjNmEwNTMtNmQ2ZC00MGJkLWI3MDgtNzMyNTc4YjVkNTQ1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Cedric Smith, Cal Dodd",
                "imDbRating": "8.4",
                "imDbRatingCount": "43351"
            },
            {
                "id": "tt6958022",
                "rank": "245",
                "title": "The Defiant Ones",
                "fullTitle": "The Defiant Ones (2017)",
                "year": "2017",
                "image": "https://m.media-amazon.com/images/M/MV5BNjAyMjg0MTMtZmUxZC00MzhiLTk1YzYtOGE4YWNmYmIzMjc4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Bono, Stevie Nicks",
                "imDbRating": "8.4",
                "imDbRatingCount": "14747"
            },
            {
                "id": "tt0397150",
                "rank": "246",
                "title": "Garth Marenghi's Darkplace",
                "fullTitle": "Garth Marenghi's Darkplace (2004)",
                "year": "2004",
                "image": "https://m.media-amazon.com/images/M/MV5BOWIyNDI4M2YtNjI5ZS00NDE3LTk2NmQtZTc1YTUwNjgwYWMyXkEyXkFqcGdeQXVyMjMwNjYyMzE@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Richard Ayoade, Matt Berry",
                "imDbRating": "8.4",
                "imDbRatingCount": "18522"
            },
            {
                "id": "tt5675620",
                "rank": "247",
                "title": "The Punisher",
                "fullTitle": "The Punisher (2017)",
                "year": "2017",
                "image": "https://m.media-amazon.com/images/M/MV5BNjJhZDZhNWYtMjdhYS00NjkyLWE5NzItMzljNmQ3NGE4MGZjXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Jon Bernthal, Amber Rose Revah",
                "imDbRating": "8.4",
                "imDbRatingCount": "232733"
            },
            {
                "id": "tt0310455",
                "rank": "248",
                "title": "Foyle's War",
                "fullTitle": "Foyle's War (2002)",
                "year": "2002",
                "image": "https://m.media-amazon.com/images/M/MV5BYjJhNjUzN2ItNmFjMC00ZjM3LWExMmItZjkyMjI1NWU3Y2FmXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_UY176_CR0,0,128,176_AL_.jpg",
                "crew": "Michael Kitchen, Honeysuckle Weeks",
                "imDbRating": "8.4",
                "imDbRatingCount": "15582"
            },
            {
                "id": "tt10155688",
                "rank": "249",
                "title": "Mare of Easttown",
                "fullTitle": "Mare of Easttown (2021)",
                "year": "2021",
                "image": "https://m.media-amazon.com/images/M/MV5BYjIyOGU1NzAtODZmYi00NGMzLWJiMjItNGNjNTFjOTM5ZDJhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
                "crew": "Kate Winslet, Julianne Nicholson",
                "imDbRating": "8.4",
                "imDbRatingCount": "152763"
            },
            {
                "id": "tt3671754",
                "rank": "250",
                "title": "Kardes Payi",
                "fullTitle": "Kardes Payi (2014)",
                "year": "2014",
                "image": "https://m.media-amazon.com/images/M/MV5BNDI2YThjNzAtZWZiMS00OWZkLWIwY2UtN2RjNTU5MGE1ODdkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
                "crew": "Ahmet Kural, Murat Cemcir",
                "imDbRating": "8.4",
                "imDbRatingCount": "16392"
            }
        ],
        "errorMessage": ""
    }
    `
    return Promise.resolve(JSON.parse(jsonStr))
}


const URL = 'https://imdb-api.com/en/API/Top250TVs/k_f8t6fjas'

console.log('making request using promises')
// Using Promises
jsonFetch(URL)                // Promise<Response>  
    .then(processResults)     // Promise<undefined>  
    .catch(processError)

console.log('Nothing more to do using promises')

console.log('Making request using async/await style')

// try {
//     let response = await fetch(URL)
//     let obj = await response.json()
//     processResults(obj)
// } catch(err) {
//     processError(err)
// }


// Using async/await
async function makeRequest() {
    try {
        let response = await fetch(URL)
        let obj = await response.text()
        processResults(obj)
    } catch(err) {
        processError(err)
    }
    
}

makeRequest()
console.log('Nothing more to do using async/await')



// // Utility code
function processResults(obj) {
    console.log('Processing results...')

    //console.log(obj)
    //console.log(obj.items.slice(0, 10).map(e => `${e.title} - ${e.imDbRating}`))

    // let a = []
    // obj.items.slice(0, 10).forEach(e => a.push(`${e.title} - ${e.imDbRating}`))
    // console.log(a)

    //obj.items.slice(0, 10).forEach(e => console.log(`${e.title} - ${e.imDbRating}`))





    //obj.items.forEach(s => console.log(`${s.title} - ${s.imDbRating}`))
    // console.log(
    //     obj.items.map(s => `${s.title} - ${s.imDbRating}`).slice(0,10)
    // )
}

function processError(error) {
    console.log(`An error occurred ${error} `)
}

