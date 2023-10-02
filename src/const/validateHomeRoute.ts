import { revalidatePath } from "next/cache";

async function handle() {
    revalidatePath('/', 'page');
};
export default handle;