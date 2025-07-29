import { GetAllUsers } from "@/actions/users";

async function HomePage() {
  const users = await GetAllUsers();

  console.log(users);

  // users.forEach(user => {
  //   console.log(user.firstName)
  // })

  return (
    <div>
      Hello from HomePage
    </div>
  )
}

export default HomePage