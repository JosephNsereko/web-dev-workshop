import{Coffee,BellOff, AlarmClock} from "lucide-react"

export default function Cards() {

    const cards = [
        {
            title: "Pro Tips for Putting Things Off",
            icon: <Coffee />,
            description: "Learn proven techniques for delaying tasks with style and confidence."
        },

        {
            title: "Weekly (Optional) Reminders",
            icon: <BellOff />,
            description: "Get reminders about things you don’t want to do. Or ignore them; we totally get it."
        },
        {
            title: "Last-Minute Panic Prep",
            icon: <AlarmClock />,
            description: "Learn the tricks to tackle anything... at the last second. Because why rush?"
        },
    ]

    return (
        <div className="grid grid-cols-3 gap-x-4">
            {
                cards.map((card,index) => {
                    return (
                        <div className="border-4 border-black p-3 mt-20 ">
                            <h3 className="text-xl font-bold w-fit mx-auto">{card.title}</h3>
                            {
                                <div className= 'w-fit mx-auto my-5'>
                                    {
                                        card.icon
                                    }
                                </div>
                            }
                            <p className="mx-atuo text-center">
                                {card.description}
                            </p>
                        </div>
                    )
                })}



        </div>
    )
}