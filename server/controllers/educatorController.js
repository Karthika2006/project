
export const updateRoleToEducator = async (req, res) => {
  try {
    const { userId } = req.auth()

    // 🔥 Important check
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please login first."
      })
    }

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: 'educator'
      }
    })

    res.status(200).json({
      success: true,
      message: 'You can publish a course now'
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}