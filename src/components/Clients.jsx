import img1 from "../assets/img/icon4.png";
import img2 from "../assets/img/icon5.png";
import img3 from "../assets/img/icon6.png";

const Container = () => {
  return (
    <div id="client" className="flex-1 bg-indigo-950 text-slate-300 flex flex-col lg:flex-row shadow-custom-md">
      {/* imagen */}

      <div className="h-screen flex-1 flex items-center  ">
        <div className="p-20">
          <img
            src={img1}
            alt="Imagen representativa"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* primera parte del contenedor */}
      <div className="h-screen flex-1 flex items-center justify-center p-12">
        <div className="h-full w-full bg-gray-700 p-4 overflow-y-auto max-h-screen rounded-lg">
          <CommentCard foto={img2} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
            autem accusamus quisquam doloremque
          </CommentCard>
          <CommentCard foto={img3} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
            autem accusamus quisquam doloremque
          </CommentCard>
          <CommentCard foto={img2} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
            autem accusamus quisquam doloremque
          </CommentCard>
          <CommentCard foto={img3} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
            autem accusamus quisquam doloremque
          </CommentCard>
          <CommentCard foto={img2} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
            autem accusamus quisquam doloremque
          </CommentCard>
          <CommentCard foto={img3} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
            autem accusamus quisquam doloremque
          </CommentCard>
          <CommentCard foto={img2} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
            autem accusamus quisquam doloremque
          </CommentCard>
          <CommentCard foto={img3} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
            autem accusamus quisquam doloremque
          </CommentCard>
          <CommentCard foto={img2} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
            autem accusamus quisquam doloremque
          </CommentCard>
          <CommentCard foto={img3} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
            autem accusamus quisquam doloremque
          </CommentCard>
          <CommentCard foto={img2} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
            autem accusamus quisquam doloremque
          </CommentCard>
        </div>
      </div>
    </div>
  );
};

const CommentCard = ({ children,foto }) => {
  return (
    <div className="flex items-center justify-center mt-3 space-x-3 ">
      <div className="h-20 w-20">
        <img
          src={foto}
          alt="Imagen representativa"
          className="object-cover rounded-full border border-pink-300"
        />
      </div>
      <div className="flex-1 rounded-lg shadow-sm shadow-violet-800 p-3 bg-slate-900">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Container;