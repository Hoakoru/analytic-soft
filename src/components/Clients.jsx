import img1 from "../assets/img/icon4.png";
import img2 from "../assets/img/icon5.png";
import img3 from "../assets/img/icon6.png";

const Container = () => {
  return (
    <div className="relative">
      <div
        id="client"
        className="flex flex-col lg:flex-row relative z-30"
      >
        {/* primera parte del contenedor */}
        <div className="flex-1 p-12">
          <div className="bg-gray-700 p-4 overflow-y-auto h-screen rounded-lg">
            <CommentCard foto={img2}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
              autem accusamus quisquam doloremque
            </CommentCard>
            <CommentCard foto={img3}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
              autem accusamus quisquam doloremque
            </CommentCard>
            <CommentCard foto={img2}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
              autem accusamus quisquam doloremque
            </CommentCard>
            <CommentCard foto={img3}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
              autem accusamus quisquam doloremque
            </CommentCard>
            <CommentCard foto={img2}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
              autem accusamus quisquam doloremque
            </CommentCard>
            <CommentCard foto={img3}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
              autem accusamus quisquam doloremque
            </CommentCard>
            <CommentCard foto={img2}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
              autem accusamus quisquam doloremque
            </CommentCard>
            <CommentCard foto={img3}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
              autem accusamus quisquam doloremque
            </CommentCard>
            <CommentCard foto={img2}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
              autem accusamus quisquam doloremque
            </CommentCard>
            <CommentCard foto={img3}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
              autem accusamus quisquam doloremque
            </CommentCard>
            <CommentCard foto={img2}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatem ad ratione dolorem praesentium fuga ut in
              autem accusamus quisquam doloremque
            </CommentCard>
          </div>
        </div>

        {/* imagen */}
        <div className="flex-1 flex justify-center items-center">
          <img src={img1} alt="Imagen representativa" className="object-contain p-20" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-indigo-950 to-black z-0"></div>
    </div>
  );
};

const CommentCard = ({ children, foto }) => {
  return (
    <div className="flex items-center justify-center mt-3 space-x-3 ">
      <div className="h-20 w-20">
        <img
          src={foto}
          alt="Imagen representativa"
          className="object-contain rounded-full border shadow-md shadow-gray-900"
        />
      </div>
      <div className="flex-1 rounded-lg shadow-md shadow-gray-900 p-3 bg-gray-900 text-sky-200">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Container;
