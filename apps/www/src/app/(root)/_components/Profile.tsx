import styles from "./Section.module.css";

export function Profile() {
  return (
    <div className="px-4">
      <h2 className={styles.title}>プロフィール</h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://via.placeholder.com/200"
            alt="プロフィール写真"
            className="rounded-full"
          />
          <h3 className="mt-4 text-xl font-bold">Keita Ito</h3>
          {/* <p className="text-gray-600">肩書なんてない</p> */}
        </div>
        <div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
