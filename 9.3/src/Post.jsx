const style = {
  width: 400,
  backgroundColor: "white",
  borderRadius: 10,
  border: "1px solid #ccc",
  display: "flex",
  flexDirection: "column",
  padding: 16,
  color: "#2d3436",
  fontFamily: "Arial, sans-serif",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};

export function PostComponent({ name, followerCount, time, image, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <img
          src={image}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            marginRight: 12
          }}
          alt="profile"
        />

        <div style={{ fontSize: 14 ,marginLeft: 10 }}>
          <b>{name}</b>
          <div>{followerCount}</div>


          {time!== undefined && <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
            <div>{time}</div>
            <img
              src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="
              style={{ width: 12, height: 12 }}
              alt="clock"
            />
          </div>}


        </div>
      </div>

      <div style={{ fontSize: 14, marginBottom: 12 }}>
        {description}
      </div>

      <div
        style={{
          borderTop: "1px solid #eee",
          display: "flex",
          justifyContent: "space-around",
          fontSize: 14,
          color: "#636e72",
          paddingTop: 8
        }}
      >
        <span>👍 Like</span>
        <span>💬 Comment</span>
        <span>🔁 Share</span>
      </div>
    </div>
  );
}