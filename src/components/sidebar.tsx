type SidebarProps = {
    currentValue?: number
}

export const Sidebar = (props: SidebarProps) => {
    return(
        <div className="sidebar">
            <img src="https://cdn.discordapp.com/attachments/903475535852752926/1155422033732186274/WhatsApp_Image_2023-09-24_at_9.13.41_AM.jpeg" alt="picture" style={{borderRadius: '50%', objectFit: 'cover', width: '69px', height: '69px'}} />
            <h2>Chia YH</h2>
            <p>Currently in SMK Bandar Damai Perdana. 1 adab's monitor. Speak 3 languages fluently: english, chinese, programming</p>

            
        </div>
    )
}