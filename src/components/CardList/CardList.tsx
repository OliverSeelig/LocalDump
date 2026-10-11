import "./CardList.css"

import Instagram from "../../assets/icons/icons_instagram.png"
import Facebook from "../../assets/icons/icon_facebook.png"
import CaraApp from "../../assets/icons/icon_cara_app.png"
import BlueSky from "../../assets/icons/icon_bluesky.png"

type SocialNetwork = {
    name: string;
};

type CardItem = {
    name: string;
    profileIcon: string;
    profileBanner: string;
    socialNetworks: SocialNetwork[];
};

type CardListProps = {
    items: CardItem[];
};

export default function CardList({ items }: CardListProps) {

    return (
        <ul className="card-list">
            {items.map((item) => (
                <li className="card" key={item.name} style={{
                    backgroundImage: item.profileBanner
                        ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.profileBanner})`
                        : "none",
                }}>
                    <img
                        className="card-profile-image"
                        src={item.profileIcon}
                        alt={item.name}
                    />
                    <div className="card-box-infos">
                        <p className="card-profile-name">{item.name}</p>

                        <ul className="card-social-links">
                            {item.socialNetworks.map((media) => (
                                <li key={media.name}>
                                    {media.name === "instagram" && (
                                        <img src={Instagram} alt="Instagram" />
                                    )}

                                    {media.name === "facebook" && (
                                        <img src={Facebook} alt="Facebook" />
                                    )}

                                    {media.name === "cara" && (
                                        <img src={CaraApp} alt="Cara App" />
                                    )}

                                    {media.name === "bluesky" && (
                                        <img src={BlueSky} alt="Bluesky" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                </li>
            ))}
        </ul>
    );
}