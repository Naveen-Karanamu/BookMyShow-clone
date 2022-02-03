import React from "react";
import { GiBarracksTent } from "react-icons/gi"
import { RiCustomerService2Fill } from "react-icons/ri"
import { IoTicketOutline } from "react-icons/io5"
import { GoMailRead } from "react-icons/go"
import Logo from "../../images/logo.image";
import { BsFacebook, BsInstagram, BsYoutube, BsPinterest, BsLinkedin } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"

const Footer = () => {
    return (<>
        <div className="hidden lg:block pt-14">
            <div className=" flex flex-col bg-white   justify-start container mx-auto px-32 gap-4 py-4">
                <p className="text-xs text-commonPink-800 font-semibold">Thank You</p>
                <p className="text-xs text-commonPink-700">By using www.bookmyshow.com(our website), you are fully accepting the Privacy Policy available at
                    <span className="text-commonPink-100"> https://bookmyshow.com/privacy </span>
                    governing your access to Bookmyshow and provision of services by Bookmyshow to you. If you do not accept terms mentioned in the
                    <span className="text-commonPink-100"> Privacy Policy </span>
                    , you must not share any of your personal information and immediately exit Bookmyshow.
                </p>
            </div>

            {/* <div className="bg-transparent h-8"></div> */}

            <div className="flex bg-commonPink-500 h-20 items-center">
                <div className="flex items-center container mx-auto px-32 justify-between">
                    <div className="flex  gap-4 items-center">
                        <GiBarracksTent className="text-gray-300 w-8 h-8" />
                        <p className="font-bold text-medium text-gray-200">List your Show</p>
                        <p className="text-md text-gray-200 font-normal">Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</p>
                    </div>
                    <div>
                        <button className="text-white bg-commonPink-200 text-md w-36 h-10 rounded ">Contact today!</button>
                    </div>
                </div>

            </div>

            <div className="h-28 bg-commonPink-600 flex justify-evenly items-center">
                <div className="flex flex-col items-center text-gray-400 gap-4  hover:text-gray-200">
                    <RiCustomerService2Fill className="w-12 h-12" />
                    <p className="text-xs">24/7 CUSTOMER CARE</p>
                </div>
                <div className="flex flex-col items-center text-gray-400 gap-4  hover:text-gray-200">
                    <IoTicketOutline className="w-12 h-12" />
                    <p className="text-xs">RESEND BOOKING CONFIRMATION</p>
                </div>
                <div className="flex flex-col items-center text-gray-400 gap-4  hover:text-gray-200">
                    <GoMailRead className="w-12 h-12" />
                    <p className="text-xs">SUBSCRIBE TO THE NEWSLETTER</p>
                </div>
            </div>

            <div className="bg-commonPink-500 pt-6">
                <div className="container mx-auto px-32 flex flex-col gap-4">
                    <h4 className="text-sm text-zinc-400 font-medium">Movies Now Showing in Vishakapatnam</h4>
                    <p className="text-xs text-commonPink-700">Ombatthane DikkuHridayam | Spider-Man: No Way Home | Scream (2022) | Good Luck Sakhi | Pushpa: The Rise - Part 01 | 83 | Bangarraju | Roller Coaster And Jetpack Adventure | Tiny Forest Adventure & Need for Speed (7D)</p>

                    <h4 className="text-sm text-zinc-400 font-medium">Upcoming Movies in Vishakapatnam
                    </h4>
                    <p className="text-xs text-commonPink-700">Kakababur Protyaborton | PanghrunAthadu Ame PriyuduObba | JadaghattaSwa | Jhalle Pai Gaye Palle3E (Telugu)KakababuOperation 72 | YaaroMr Kanheiya | Halli Haikla Pyate Lifu | Kallan D`SouzaJaalbandi | Archana 31 Not Out | DJ Tillu | Law of LoveShabaash Mithu | Sawa Ser Gehun</p>

                    <h4 className="text-sm text-zinc-400 font-medium">Movies By Genre</h4>
                    <p className="text-xs text-commonPink-700">Drama Movies | Action Movies | Thriller Movies | Comedy Movies | Romantic Movies | Adventure Movies | Sci-Fi Movies | Sports Movies | Horror Movies | Period Movies | Supernatural Movies | Tragedy Movies | Adaptation Movies | Devotional Movies | Mystery Movies | Fantasy Movies | Historical Movies | Animation Movies | Classic Movies | Adult Movies | Crime Movies | Political Movies | screening Movies | Suspense Movies | Biography Movies | Bollywood Movies | War Movies | Heist Movies | Musical Movies | Mythological Movies | Noir Movies | Anime Movies | Psychological Movies |
                        Movies By Language</p>

                    <h4 className="text-sm text-zinc-400 font-medium">Movies By Language
                    </h4>
                    <p className="text-xs text-commonPink-700">Movies in English | Movies in Kannada | Movies in Tamil | Movies in Telugu | Movies in Malayalam | Movies in English 7D | Movies in Hindi | Movies in Nepali | Movies in Haryanavi | Movies in Tulu | Movies in Sindhi | Movies in Japanese | Movies in Assamese | Movies in Portuguese | Movies in Chattisgarhi | Movies in Bhojpuri | Movies in French | Movies in Punjabi | Movies in Urdu | Movies in Oriya | Movies in Marathi | Movies in Konkani | Movies in Rajasthani | Movies in Bengali | Movies in Gujarati | Movies in Khasi</p>

                    <h4 className="text-sm text-zinc-400 font-medium">Plays By Genre in Vishakapatnam
                    </h4>
                    <p className="text-xs text-commonPink-700">Drama Plays | Broadway Plays | Sci-Fi Plays | Period Plays | Tragedy Plays | Action Plays | Adaptation Plays | Mystery Plays | Fantasy Plays | Historical Plays | Online Streaming Plays Plays | Classic Plays | Adult Plays |  | Comedy Plays | Contemporary Plays | Tribute Plays | Political PlaysT | hriller Plays | Suspense Plays | Romantic Plays | Biography Plays | Horror Plays | War Plays | Adventure Plays | Musical Plays | Mythological Plays | Noir Plays | Regional Plays | Psychological Plays
                        Movie Reviews</p>

                    <h4 className="text-sm text-zinc-400 font-medium">Movie Reviews
                    </h4>
                    <p className="text-xs text-commonPink-700">Trending ArticlesLatest News on Movies, Events, Plays and SportsRajeev Masand Movie ReviewsAnupama Chopra Movie ReviewsFilm ReviewsGuest Blogging</p>

                    <h4 className="text-sm text-zinc-400 font-medium">Movie Updates and Celebrities
                    </h4>
                    <p className="text-xs text-commonPink-700">Upcoming MoviesMovies Now ShowingMovie Celebrities</p>

                    <h4 className="text-sm text-zinc-400 font-medium">Things to do in Vishakapatnam
                    </h4>
                    <p className="text-xs text-commonPink-700">AdventureAmusement ParksAntiques, Heritage, MuseumsChristmas CelebrationsDurga Puja FestivalFestivalsFood and DrinksGamingHilsa FestivalHoli PartiesHospitalsMonumentsNavratriNightlifeNew Year PartiesPartiesPoila Baishakh Festival Quizzes and CompetitionsShops and MallsTourist AttractionsUnique ToursValentines Day Celebrations</p>

                    <h4 className="text-sm text-zinc-400 font-medium">Sports Events in Vishakapatnam
                    </h4>
                    <p className="text-xs text-commonPink-700">E Sports | Rugby | Archery | Athletics | Badminton | Baseball | Basket | ball | Boat Race | Bowling | Boxing | Card Games | Chess | CricketCycling | Derby Horse Race | Golf | Football | Ice Skating | ockeyJudo | Kabaddi | KickboxingM | ixed Martial Art | sMotorsports | Muay Thai | Online Sports | Polo | PoolRunning | SailingShooting | Snooke | rSwimming | Table Tennis | TennisT | riathlon | Volleyball | Weight Lifting | Walking | Wrestling | Online Games</p>

                    <h4 className="text-sm text-zinc-400 font-medium">Events in Vishakapatnam
                    </h4>
                    <p className="text-xs text-commonPink-700">Comedy Shows | Workshops | KidsS | pirituality | Exhibitions | Music Shows | Award showsC | onferences | MeetupsO | nline Streaming Events | ScreeningTalks | Vaccination | Celebrity Wishes</p>

                    <h4 className="text-sm text-zinc-400 font-medium">Cinemas in Top Cities
                    </h4>
                    <p className="text-xs text-commonPink-700">Cinemas in Mumbai | Cinemas in National Capital Region (NCR)Cinemas in Chennai | Cinemas in Vishakapatnam | Cinemas in Hyderabad | Cinemas in Pune | Cinemas in Ahmedabad | Cinemas in Kolkata | Cinemas in Kochi</p>

                    <h4 className="text-sm text-zinc-400 font-medium">Events in Top Cities
                    </h4>
                    <p className="text-xs text-commonPink-700">Events in Mumbai | Events in National Capital Region (NCR)Events in Chennai | Events in Vishakapatnam | Events in Hyderabad | Events in Pune | Events in Ahmedabad | Events in Kolkata | Events in Kochi</p>

                    <h4 className="text-sm text-zinc-400 font-medium">Plays in Top Cities
                    </h4>
                    <p className="text-xs text-commonPink-700">Plays in Mumbai | Plays in National Capital Region (NCR)Plays in Chennai | Plays in Vishakapatnam | Plays in Hyderabad | Plays in Pune | Plays in Ahmedabad | Plays in Kolkata | Plays in Kochi</p>

                    <h4 className="text-sm text-zinc-400 font-medium">Activities in Top Cities
                    </h4>
                    <p className="text-xs text-commonPink-700">Things to do in Mumbai | Things to do in National Capital Region (NCR)Things to do in Chennai | Things to do in Vishakapatnam | Things to do in Hyderabad | Things to do in Pune | Things to do in Ahmedabad | Things to do in Kolkata | Things to do in Kochi
                    </p>

                    <h4 className="text-sm text-zinc-400 font-medium">Movies in Top Cities
                    </h4>
                    <p className="text-xs text-commonPink-700">Movies in Mumbai | Movies in National Capital Region (NCR)Movies in Chennai | Movies in Vishakapatnam | Movies in Hyderabad | Movies in Pune | Movies in Ahmedabad | Movies in Kolkata | Movies in Kochi
                    </p>

                    <h4 className="text-sm text-zinc-400 font-medium">COUNTRIES
                    </h4>
                    <p className="text-xs text-commonPink-700">Indonesia | Singapore | UAE | Sri Lanka | West Indies
                    </p>

                    <h4 className="text-sm text-zinc-400 font-medium">HELP
                    </h4>
                    <p className="text-xs text-commonPink-700">About Us | Contact Us | Current Opening | Press Release | Press Coverage | Sitemap | FAQs | Terms and Conditions | Privacy Policy
                    </p>

                    <h4 className="text-sm text-zinc-400 font-medium">BOOKMYSHOW EXCLUSIVES
                    </h4>
                    <p className="text-xs text-commonPink-700">Superstar | Book | A | Smile | Corporate VouchersGift Cards | List My Show | Offers | Stream | Buzz | Trailers
                    </p>


                </div>
                <div className="flex items-ceter justify-center py-14">
                    <div className="text-commonPink-700 pt-1">______________________________________________________________________________________________________</div>
                    <div><Logo /></div>
                    <div className="text-commonPink-700 pt-1">__________________________________________________________________________________________________</div>
                </div>
                <div className="flex gap-4 items-center justify-center text-commonPink-700 pb-8">
                    <BsFacebook className="w-8 h-8 hover:text-gray-100" />
                    <AiFillTwitterCircle className="w-8 h-8 hover:text-gray-100" />
                    <BsInstagram className="w-8 h-8 hover:text-gray-100" />
                    <BsYoutube className="w-8 h-8 hover:text-gray-100" />
                    <BsPinterest className="w-8 h-8 hover:text-gray-100" />
                    <BsLinkedin className="w-8 h-8 hover:text-gray-100" />
                </div>
                <div className="flex flex-col items-center justify-center text-center px-12 pb-12">
                    <p className="text-xs text-commonPink-700">Copyright 2022 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
                    </p>
                    <p className="text-xs text-commonPink-700">The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
                    </p>
                </div>

            </div>
        </div>
    </>)
}

export default Footer;