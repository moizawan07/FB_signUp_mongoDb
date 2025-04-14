const logout = (req, res) => {
    res.clearCookie('Token');  // cookie name
    return res.status(200).json({ message: 'Logged out successfully' });
}

module.exports = logout