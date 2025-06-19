export interface Customer {
  id: number
  name: string
  slaLevel: string
  level: string
  contract: string
  feeInfo: string
}

export interface Site {
  id: number
  customerId: number
  customerName?: string
  name: string
  contact: string
  manager: string
  location: string
  deployedProducts: string[]
  description?: string
}

export interface RemoteAccess {
  id: number
  siteId: number
  type: 'SSH' | 'RDP' | 'VNC'
  host: string
  port: number
  username: string
  passwordEncrypted: string
}

export interface HostAsset {
  id: number
  siteId: number
  siteName?: string
  hostname: string
  ip: string
  os: string
  status: 'online' | 'offline'
}

