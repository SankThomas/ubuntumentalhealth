import Photos from "./Photos";

const otherphotos = [
  {
    path: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
  {
    path: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
  {
    path: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
  {
    path: "https://images.unsplash.com/photo-1524856949007-80db29955b17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
  {
    path: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
  {
    path: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Some descriptive text about the photo",
  },
];

export default function Other() {
  return (
    <>
      <div>
        <h2 className={`text-3xl mb-4`}>Other</h2>
        <p className="text-slate-900/75">
          Nitatoa hii section. It is only for demonstration
        </p>
        <Photos photos={otherphotos} title="Other photos" />
      </div>
    </>
  );
}
