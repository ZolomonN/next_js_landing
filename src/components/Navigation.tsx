"use client"

import useScroll from "@/helpers/useScroll";
import { Adb as AdbIcon, Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, styled, SxProps, Theme, Toolbar, Tooltip, Typography } from "@mui/material"
import Link from "next/link";
import React, { useCallback, useMemo } from "react";
import pages from "@/mock/pages.json"

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

type TUserMenu = {
    userElAnchor: HTMLElement | null,
    handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void,
    handleCloseUserMenu: () => void
}

type TMobileNavigation = {
    navElAnchor: HTMLElement | null,
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void,
    handleCloseNavMenu: () => void
}

const logoTypographySx: SxProps<Theme> = {
    fontFamily: 'monospace',
    fontWeight: 700,
    color: 'inherit',
    letterSpacing: '.3rem',
    textDecoration: 'none',
}

const desktopLogoContainer: SxProps<Theme> = { display: { xs: 'none', md: 'flex' }, alignItems: "center", marginRight: 2, gap: 1 }

const desktopNavigationContainer: SxProps<Theme> = { flexGrow: 1, display: { xs: 'none', md: 'flex' } }

const mobileLogoContainer: SxProps<Theme> = Object.assign({}, desktopLogoContainer, { display: { xs: 'flex', md: 'none', flexGrow: 1 } })

const mobileNavigationContainer: SxProps<Theme> = Object.assign({}, desktopNavigationContainer, { display: { xs: 'flex', md: 'none' } })

const DesktopNavLink = styled(Link)({
    color: 'inherit',
    display: 'block',
    margin: "2rem 0.5rem",
    textTransform: "uppercase",
    fontWeight: "500",
    textDecoration: "none"
})

const MobileNavigation: React.FC<TMobileNavigation> = props => {
    const { navElAnchor, handleOpenNavMenu, handleCloseNavMenu } = props

    return <Box sx={mobileNavigationContainer}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={navElAnchor}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(navElAnchor)}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
            }}
        >
            {pages.map((page) => (
                <MenuItem key={page.url} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </Box>
}

const UserMenu: React.FC<TUserMenu> = props => {
    const { userElAnchor, handleOpenUserMenu, handleCloseUserMenu } = props

    return <>
        <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/doctor.png" />
            </IconButton>
        </Tooltip>
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={userElAnchor}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(userElAnchor)}
            onClose={handleCloseUserMenu}
        >
            {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </>
}

const Nav: React.FC = props => {
    const [navElAnchor, setNavElAnchor] = React.useState<null | HTMLElement>(null);
    const [userElAnchor, setUserElAnchor] = React.useState<null | HTMLElement>(null);
    const isPageScrolled = useScroll()


    const handleOpenNavMenu = useCallback((event: React.MouseEvent<HTMLElement>) => setNavElAnchor(event.currentTarget), [])
    const handleCloseNavMenu = useCallback(() => setNavElAnchor(null), []);


    const handleOpenUserMenu = useCallback((event: React.MouseEvent<HTMLElement>) => setUserElAnchor(event.currentTarget), [])
    const handleCloseUserMenu = useCallback(() => setUserElAnchor(null), [])






    const appBarSx = useMemo<SxProps<Theme>>(() => ({
        backgroundColor: isPageScrolled ? "#fff" : "transparent",
        color: isPageScrolled ? "text.primary" : "#fff",
        transition: "all 0.3s",
        boxShadow: "none"
    }), [isPageScrolled])



    return (
        <AppBar position="fixed" sx={appBarSx}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box sx={desktopLogoContainer}>
                        <AdbIcon />
                        <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu" sx={logoTypographySx}>
                            MEDICAL
                        </Typography>
                    </Box>

                    <Box sx={desktopNavigationContainer}>
                        {pages.map((page) => <DesktopNavLink key={page.url} href={page.url}>{page.title}</DesktopNavLink>)}
                    </Box>

                    <MobileNavigation navElAnchor={navElAnchor} handleOpenNavMenu={handleOpenNavMenu} handleCloseNavMenu={handleCloseNavMenu} />

                    <Box sx={mobileLogoContainer}>
                        <AdbIcon />
                        <Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu" sx={logoTypographySx}>
                            MEDICAL
                        </Typography>
                    </Box>

                    <UserMenu userElAnchor={userElAnchor} handleOpenUserMenu={handleOpenUserMenu} handleCloseUserMenu={handleCloseUserMenu} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Nav