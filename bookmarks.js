const CONFIG_BOOKMARKS = [
    {
        category: "Server MGMT",
        links: [
            { name: "iLO PVE004", url: "https://10.250.100.40/", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
            { name: "iLO PVE003", url: "https://10.250.100.30/", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
            { name: "iLO PVE002", url: "https://10.250.100.20/", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
            { name: "iLO PVE001", url: "https://10.250.100.10/", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
            { name: "iDRAC hyper-v vbr", url: "https://10.1.0.164/", icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
            { name: "iDRAC office vmware", url: "https://10.0.0.209/", icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
            { name: "iLO STR60-Jaffa", url: "https://10.250.1.59/", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
            { name: "iLO hyperv-Jaffa", url: "https://10.250.1.159/", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
            { name: "iLO RavehRavid", url: "https://192.168.111.109/", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
            { name: "UCS CIMC monitoring", url: "https://10.10.169.113/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
            { name: "UCS CIMC Backup", url: "https://10.10.169.120/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
            { name: "UCS vKVM-ESXI05", url: "https://10.10.169.33/kvm/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
            { name: "UCS vKVM-ESXI04", url: "https://10.10.169.38/kvm/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
            { name: "UCS vKVM-ESXI03", url: "https://10.10.169.34/kvm/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
            { name: "UCS vKVM-ESXI02", url: "https://10.10.169.37/kvm/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
            { name: "UCS vKVM-ESXI01", url: "https://10.10.169.35/kvm/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
            { name: "HyperV-56", url: "https://10.10.169.30/kvm/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
            { name: "HyperV-55", url: "https://10.10.169.36/kvm/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
            { name: "HyperV-54", url: "https://10.10.169.32/kvm/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
            { name: "HyperV-53", url: "https://10.10.169.31/kvm/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
            { name: "HyperV-52", url: "https://10.10.169.39/kvm/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
            { name: "HyperV-51", url: "https://10.10.169.41/kvm/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" }
        ]
    },
    {
        category: "Virtualization nodes",
        links: [
            { name: "ESX201", url: "https://10.1.0.201/", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg" },
            { name: "ESX202", url: "https://10.1.0.202", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg" },
            { name: "ESX203", url: "https://10.1.0.203", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg" },
            { name: "ESX204", url: "https://10.1.0.204", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg" },
            { name: "ESX205", url: "https://10.1.0.205", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg" },
            { name: "PVE001", url: "https://10.100.0.10:8006/", icon: "https://www.proxmox.com/images/proxmox/Proxmox_logo_standard_600px.png" },
            { name: "PVE002", url: "https://10.100.0.20:8006/", icon: "https://www.proxmox.com/images/proxmox/Proxmox_logo_standard_600px.png" },
            { name: "PVE003", url: "https://10.100.0.30:8006/", icon: "https://www.proxmox.com/images/proxmox/Proxmox_logo_standard_600px.png" },
            { name: "PVE004", url: "https://10.100.0.40:8006/", icon: "https://www.proxmox.com/images/proxmox/Proxmox_logo_standard_600px.png" }
        ]
    },
    {
        category: "Helpdesk & Support",
        links: [
            { name: "Helpdesk mailbox", url: "https://62.219.78.71:2087/", icon: "mail" },
            { name: "Helpdesk cPanel", url: "https://62.219.78.71:2083/...", icon: "layout" },
            { name: "Contact list", url: "https://www.livedns.co.il/office-contacts.html", icon: "users" },
            { name: "RustDesk", url: "https://rustdesk.com/", icon: "monitor" }
        ]
    },
    {
        category: "Abusers Lists",
        links: [
            { name: "Shared Abuse IP List", url: "https://github.com/...", icon: "github" },
            { name: "Shared Abuse Domains List", url: "https://github.com/...", icon: "github" },
            { name: "Shared Abuse Masks List", url: "https://github.com/...", icon: "github" },
            { name: "Abuse DNS services", url: "https://github.com/...", icon: "github" }
        ]
    },
    {
        category: "Windows Hosting",
        links: [
            { name: "Plesk231", url: "https://62.219.78.231:8443/", icon: "https://www.plesk.com/wp-content/uploads/2021/03/Plesk_Logo_Blue.svg" },
            { name: "Plesk230", url: "https://62.219.78.230:8443/", icon: "https://www.plesk.com/wp-content/uploads/2021/03/Plesk_Logo_Blue.svg" },
            { name: "SolidCP", url: "https://control.livedns.co.il/", icon: "https://solidcp.com/wp-content/uploads/2016/03/Logo-horizontal.png.webp" }
        ]
    },
    {
        category: "Linux Hosting",
        links: [
            { name: "cPanel8", url: "https://cpanel8.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "cPanel11", url: "https://cpanel11.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "cPanel15", url: "https://cpanel15.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "cPanel16", url: "https://cpanel16.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "cPanel17", url: "https://cpanel17.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "cPanel18", url: "https://cpanel18.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "cPanel29", url: "https://cpanel29.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "cPanel20", url: "https://cpanel20.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "cPanel21", url: "https://cpanel21.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "cPanel22", url: "https://cpanel22.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "cPanel23", url: "https://cpanel23.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "cPanel24", url: "https://cpanel24.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "cPanel25", url: "https://cpanel25.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "cPanel26", url: "https://cpanel26.livedns.co.il:2087/", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/CPanel_logo.svg" },
            { name: "LivePress", url: "https://cp101.livepress.co.il:8443", icon: "https://www.plesk.com/wp-content/uploads/2021/03/Plesk_Logo_Blue.svg" }
        ]
    }
];
