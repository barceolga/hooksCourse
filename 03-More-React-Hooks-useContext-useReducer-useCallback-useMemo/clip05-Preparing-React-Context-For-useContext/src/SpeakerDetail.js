import ImageToggleOnScroll from "./ImageToggleOnScroll";
// We wrap up the whole component in React.memo in order to be able to use the useCallback hook to only render the changed portion of code
const SpeakerDetail = React.memo( ({
                           id,
                           firstName,
                           lastName,
                           favorite,
                           bio,
                           onHeartFavoriteHandler
                       }) => {
    //The console.log at the end of this comment is used for checking which speaker value is rerendered after selecting him/her as favorite or unfavorite. 
    // Due to wrapping up the whole compoment SpeakerDetail in React.memo and applying useCallback hook in Spekers.js in HeartFavoriteHandler method, only the updated 
    // speaker is rerendered, the others are brought as cached (memoized) and not rerendered at all. That improves app performance.
    //console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);
    return (
        <div className="card col-4 cardmin">
            <ImageToggleOnScroll
                className="card-img-top"
                primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
                secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
                alt="{firstName} {lastName}"
            />
            <div className="card-body">
                <h4 className="card-title">
                    <button
                        data-sessionid={id}
                        className={favorite ? "heartredbutton" : "heartdarkbutton"}
                        onClick={e => {
                            onHeartFavoriteHandler(e, !favorite);
                        }}
                    />
                    <span>
            {firstName} {lastName}
          </span>
                </h4>

                <span>{bio}</span>
            </div>
        </div>
    );
});

export default SpeakerDetail;
